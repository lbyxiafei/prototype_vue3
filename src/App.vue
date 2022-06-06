<template>
<div class="app-container">
  <RouterView />
</div>
</template>

<script>
import { RouterView } from 'vue-router';

export default{
  name: "App",
  components:{
    RouterView,
  },
}
</script>

<style scoped>
.app-container{
  background-color: beige;
  max-height: 98vh;
  width: 97vw;
  overflow: visible;
}
</style>
