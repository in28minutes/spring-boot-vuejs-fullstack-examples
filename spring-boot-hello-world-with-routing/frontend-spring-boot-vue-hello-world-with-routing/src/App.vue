<template>
  <div>
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>
