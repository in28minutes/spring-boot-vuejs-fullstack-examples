<template>
  <section>
    <Menu/>
    <h1>Login</h1>
    <div class="container">
      <div v-if="hasLoginFailed" class="alert alert-warning">Invalid Credentials</div>
      <div v-if="showSuccessMessage" class="alert">Login Sucessful</div>User Name:
      <input type="text" name="username" v-model="username">
      Password:
      <input type="password" name="password" v-model="password">
      <button class="btn btn-success" v-on:click="loginClicked">Login</button>
    </div>
  </section>
</template>
<script>
import Menu from "./Menu";
import AuthenticationService from "../service/AuthenticationService";

export default {
  name: "Login",
  components: {
    Menu
  },
  data() {
    return {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
  },
  methods: {
    loginClicked() {
      AuthenticationService.executeBasicAuthenticationService(
        this.username,
        this.password
      )
        .then(() => {
          AuthenticationService.registerSuccessfulLogin(
            this.username,
            this.password
          );
          this.showSuccessMessage = true;
          this.$router.push("/courses");
        })
        .catch(() => {
          this.hasLoginFailed = true;
          this.showSuccessMessage = false;
        });
    }
  }
};
</script>
