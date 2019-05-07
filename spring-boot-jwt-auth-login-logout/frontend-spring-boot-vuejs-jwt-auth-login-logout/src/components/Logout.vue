<template>
  <section>
    <Menu/>
    <h1>You are logged out</h1>
    <div class="container">Thank You for Using Our Application.</div>
  </section>
</template>
<script>
import Menu from "./Menu";

export default {
  name: "Logout",
  components: {
    Menu
  }
};
</script>
