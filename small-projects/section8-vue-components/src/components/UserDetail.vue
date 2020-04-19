<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name Callback</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  //   props: ['name'], // props as an array
  props: {
    /*       name: String
    //   name: [String, Array]  // We can validate multiple types like this */
    name: {
      type: String,
      required: true,
      default: "anonymous"
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    // Alternative of the custom event for communication
    resetName() {
      this.name = "Max";
      //   Emit a cumtom event
      this.$emit("nameWasReset", this.name);
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
