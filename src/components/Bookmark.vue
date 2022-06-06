<template>
  <div class="container">
    <h3>{{bookmark.name}}: {{bookmark.url}}</h3>
    <h3>{{bookmark.tags}}</h3>
  </div>
</template>

<script>
export default{
  name: "Bookmark",
  props:{
    bookmark: Object
  }
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  height: 100%;
  width: 100%;
}
</style>