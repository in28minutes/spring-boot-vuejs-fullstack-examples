<template>
  <div>
    <h1>Hello World Bean Component</h1>
    <div class="container">{{welcomeMessage}}</div>
    <div class="row">
      <button class="btn btn-success" v-on:click="gotoStringComponent()">Go</button>
    </div>
  </div>
</template>
<script>
import HelloWorldService from '../service/HelloWorldService';

export default {
  name: "Hello-World-Bean",
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
        HelloWorldService.executeHelloWorldBeanService().then((res) => {
            this.welcomeMessage = res.data.message;
        })
    },

    gotoStringComponent() {
      this.$router.push(`/hello-world-string`);
    }
  }
};
</script>
