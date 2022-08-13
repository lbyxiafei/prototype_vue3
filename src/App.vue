<template>
<div class="view-container">
  <header>
    <Header />
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
import Header from './components/Header.vue'

export default{
  name: "App",
  components:{
    RouterView,
    Header
  },
}
</script>

<style scoped>
@import './assets/base.css';
</style>
