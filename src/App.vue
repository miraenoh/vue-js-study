<template>
  <div id="app">
    <search @search="changeMovieResults" />
    <movie-list :movies="movies"></movie-list>
  </div>
</template>

<script>
import Search from './components/Search'
import MovieList from './components/MovieList'

export default {
  name: 'App',
  components: {
    Search,
    MovieList
  },
  data () {
    return {
      movies: []
    }
  },
  methods: {
    changeMovieResults (results) {
      this.movies = results
    }
  }
}
</script>

<style>
:root {
  --blue-darkest: #131c25;
  --blue-light: #169cfc;
  --white: #e3e4e5;
  --grey-light: #919191;
  --yellow: #e3b044;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato';
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  padding: 2rem 4rem;
  background-color: var(--blue-darkest);

  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
}
</style>
