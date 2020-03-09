<template>
  <li>
    <img :src="imageURL" />
    <p>{{ movie.Title }}</p>
    <span>{{ movie.Year }}</span>
    <a :href="`https://www.imdb.com/title/${movie.imdbID}`">More</a>
  </li>
</template>

<script>
import unknownImage from '@/assets/unknown.jpg'

export default {
  name: 'movie-list-item',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageURL() {
      return this.movie.Poster === 'N/A' ? unknownImage : this.movie.Poster
    }
  }
}
</script>

<style></style>
