<template>
<div class="view-container">
  <Header />
  <div class="view-body">
    <h1>迷えば、敗れる</h1>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';

export default{
  name: "AboutView",
  components: {
    Header
  }
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
