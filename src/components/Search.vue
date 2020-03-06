<template>
  <div>
    <input v-model="searchQuery" @keyup.enter="search" />
  </div>
</template>

<script>
import axios from 'axios'

const BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}`

export default {
  name: 'search',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    async search () {
      const requestURL = `${BASE_URL}&s=${this.searchQuery}`
      const response = await axios.get(requestURL)
      if (response.status === 200) {
        console.log(response)
        const data = response.data
        if (data.Response === 'True') {
          return this.$emit('search', data.Search)
        }
      }
    }
  }
}
</script>

<style></style>
