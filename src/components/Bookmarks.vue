<template>
  <div v-for="bookmark in bookmarks" :key="bookmark.id">
    <Bookmark :bookmark="bookmark"/>
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