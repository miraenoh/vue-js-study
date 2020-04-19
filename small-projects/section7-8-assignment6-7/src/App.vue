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
import Header from "./components/Shared/Header.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Footer from "./components/Shared/Footer.vue";

export default {
  components: {
    "my-header": Header,
    "my-server-list": Servers,
    "my-server-details": ServerDetails,
    "my-footer": Footer
  }
};
</script>

<style>
</style>
