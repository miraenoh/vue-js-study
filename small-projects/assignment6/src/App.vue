<template>
  <div class="container">
    <my-header />
    <hr />
    <div class="row">
      <my-server-list />
      <my-server-details />
    </div>
    <hr />
    <my-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ServerList from "./components/ServerList.vue";
import ServerDetails from "./components/ServerDetails.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "my-header": Header,
    "my-server-list": ServerList,
    "my-server-details": ServerDetails,
    "my-footer": Footer
  }
};
</script>

<style>
</style>
