<template>
  <div>
    <input v-model="searchQuery" @keyup.enter="search" />
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search () {
      alert('search')
    }
  }
}
</script>

<style>
</style>
