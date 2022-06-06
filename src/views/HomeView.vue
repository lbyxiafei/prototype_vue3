<template>
<div class="view-container">
  <Header />
  <div class="view-body">
    <h1>Home</h1>
  </div>
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