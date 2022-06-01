<template>
  <Header />
  <div class="container">
    <SiderLeft />
    <RouterView class="router"/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import SiderLeft from './components/SiderLeft.vue';

export default{
  name: "App",
  components:{
    Header,
    RouterView,
    SiderLeft
}
}
</script>

<style scoped>
.container{
  display:flex;
}
.router{
  background-color: beige;
}
</style>
