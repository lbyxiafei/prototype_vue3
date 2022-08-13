<template>
<div class="view-container">
  <header>
    <HeaderView />
  </header>
  <main>
    <RouterView/>
  </main>
  <nav>Nav</nav>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderView from './views/HeaderView.vue'

export default{
  name: "App",
  components:{
    RouterView,
    HeaderView
  },
}
</script>

<style scoped>
@import './assets/base.css';
</style>
