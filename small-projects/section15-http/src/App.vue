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
      users: []
    };
  },
  methods: {
    onFileSelected(event) {
      this.user.file = event.target.files[0];
    },
    submit() {
      this.$http.post("", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchData() {
      this.$http
        .get("")
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
  }
};
</script>

<style>
</style>
