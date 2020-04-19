<template>
  <div class="col-xs-12 col-sm-6">
    <h4>Server Details</h4>
    <template v-if="this.server">
      <p>Id: {{ server.id }}</p>
      <p>Status: {{ server.status }}</p>
      <button @click="changeStatus">Change Status</button>
    </template>
    <p v-else>Server Details are currently not updated</p>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data: function() {
    return {
      server: undefined
    };
  },
  methods: {
    changeStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("serverWasSelected", server => {
      this.server = server;
    });
  }
};
</script>