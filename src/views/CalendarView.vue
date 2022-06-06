<template>
<div class="view-container">
  <Header />
  <div class="view-body">
    <h1>Calendar</h1>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';

export default{
  name: "CalendarView",
  components: {
    Header
  }
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
