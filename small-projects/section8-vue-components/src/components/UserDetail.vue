<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>Reversed Name: {{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  //   props: ['name'], // props as an array
  props: {
    /*       name: String
    //   name: [String, Array]  // We can validate multiple types like this */
    name: {
      type: String,
      required: true,
      default: "anonymous"
    }
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Max";
      //   Emit a cumtom event
      this.$emit("nameWasReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
