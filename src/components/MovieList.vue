<template>
  <ul class="grid">
    <movie-list-item
      v-for="movie in movies"
      :movie="movie"
      :key="movie.imdbID"
    />
  </ul>
</template>

<script>
import MovieListItem from '../components/MovieListItem'

export default {
  name: 'movie-list',
  components: {
    MovieListItem
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 6rem;
  row-gap: 3rem;

  padding: 0;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin-top: 2rem;
  }
}
</style>
