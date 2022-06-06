<template>
<div class="container">
  <div>
    <h3><a :href="bookmark.url" target="_blank">{{bookmark.name}}</a></h3>
  </div>
  <div>
    <p>{{bookmark.tags}}</p>
  </div>
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
  display: block;
  height: 100%;
  width: 100%;
}
</style>