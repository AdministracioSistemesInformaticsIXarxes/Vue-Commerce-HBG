app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Nom:</label>
      <input id="name" v-model="name">
  
      <label for="review">Ressenya:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Nota:</label>
      <select id="rating" v-model.number="rating">
        <option>9-10</option>
        <option>7-8</option>
        <option>5-6</option>
        <option>3-4</option>
        <option>1-2</option>
      </select>
  
      <label for="recommend">Recomanaries el titol?</label>
      <select id="recommend" v-model="recommend">
        <option>Sí</option>
        <option>No</option>
      </select>
  
      <input class="button" type="submit" value="Submit">  
  
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        recommend: null
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Falta algun camp per emplenar.')
          return
        }
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
  
        }
        this.$emit('review-submitted', productReview)
  
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null
      }
    }
  })