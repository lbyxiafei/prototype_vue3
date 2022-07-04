<template>
<div class="container">
  <div class="bookmark" v-for="bookmark in bookmarks" :key="bookmark.id">
    <Bookmark :bookmark="bookmark" 
      @save-bookmark="$emit('save-bookmark', $event)"
      @delete-bookmark="$emit('delete-bookmark', $event)" />
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
  },
  emits: ['save-bookmark', 'delete-bookmark'],
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 5px;
  height: 100%;
  width: 100%;
}
.bookmark{
  display: block;
  height: 100%;
  width: 100%;
}
</style>