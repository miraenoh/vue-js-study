<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("Destroyed!");
  },
  // When we used <keep-alive> tag
  deactivated() {
    console.log("Deactivated!");
  },
  activated() {
    console.log("Activated!");
  }
};
</script>

<style scoped>
</style>