<template>
<div class="container">
  <div v-for="bookmark in bookmarks" :key="bookmark.id">
    <Bookmark :bookmark="bookmark"/>
  </div>
</div>
</template>


<script>
import Bookmark from './Bookmark.vue'

export default{
  name: "Bookmarks",
  props: {
    bookmarks: Array
  },
  components:{
    Bookmark
  }
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  background-color: bisque;
}
</style>