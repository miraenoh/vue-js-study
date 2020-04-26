<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for>Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div class="form-group">
          <label for>File</label>
          <input type="file" class="form-file" @change="onFileSelected" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" class="form-control" v-model="node" />
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" :key="user">
            {{ user.username }} - {{ user.email }}
            <br />
            <br />
            {{ user.file }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: "",
        email: "",
        file: null
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    onFileSelected(event) {
      this.user.file = event.target.files[0];
    },
    submit() {
      // Previous solution
      /*       this.$http.post("data.json", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      ); */

      // New solution using resource
      // this.resource.save({}, this.user);
      // Save to alternative by using the custom action
      this.resource.saveAlternative(this.user);
    },
    fetchData() {
      /*       this.$http
        .get("data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        }); */
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlternative: { method: "POST", url: "alternative.json" },
      getData: { method: "Get" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
