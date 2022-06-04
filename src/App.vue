<template>
  <Header class="header" />
  <div class="container">
    <RouterView class="router"/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default{
  name: "App",
  components:{
    Header,
    RouterView,
  }
}
</script>

<style scoped>
.container{
  display:flex;
}
.router{
  background-color: beige;
  width: 100%;
  height: 100%;
}
.header{
  position: absolute;
}
</style>
