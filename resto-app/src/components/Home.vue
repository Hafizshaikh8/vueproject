<template>
  <Header />
  <h1>Hello {{ name }},Welcome to the home page</h1>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>NAME</td>
      <td>CONTACT</td>
      <td>ADDRESS</td>
      <td>Actions</td>
    </tr>

    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/' + item.id">Update</router-link></td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>
<style>
td {
  width: 200px;
  height: 50px;
}
</style>
