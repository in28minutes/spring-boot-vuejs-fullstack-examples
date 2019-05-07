<template>
  <div>
    <h1>Hello World String Component</h1>
    <div class="container">{{welcomeMessage}}</div>
    <div class="row">
      <button class="btn btn-success" v-on:click="gotoBeanComponent()">Go</button>
    </div>
  </div>
</template>
<script>
import HelloWorldService from '../service/HelloWorldService';

export default {
  name: "Hello-World-String",
  data() {
    return {
      welcomeMessage: ""
    };
  },
  created() {
    this.refreshData();
  },
  methods: {
    refreshData() {
        HelloWorldService.executeHelloWorldService().then((res) => {
            this.welcomeMessage = res.data;
        })
    },

    gotoBeanComponent() {
      this.$router.push(`/hello-world-bean`);
    }
  }
};
</script>
