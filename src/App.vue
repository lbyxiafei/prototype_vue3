<template>
<div class="container">
  <div class="header">
    <Header />
  </div>
  <div class="body">
    <RouterView class="router"/>
  </div>
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
  max-height: 98vh;
  width: 97vw;
  overflow: visible;
}
.header{
  display:block;
}
.body{
  display:block;
}
.router{
  background-color: beige;
  width: 100%;
  height: 100%;
}
</style>
