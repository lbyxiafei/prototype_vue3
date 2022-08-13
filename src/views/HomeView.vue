<template>
<div class="view-container">
  <header>
    <Header />
  </header>
  <main></main>
  <nav></nav>
  <aside></aside>
  <footer></footer>
</div>
</template>

<script>
import Header from '../components/Header.vue';

export default{
  name: "HomeView",
  components: {
    Header
  }
}
</script>

<style scoped>
@import '../assets/base.css';
</style>