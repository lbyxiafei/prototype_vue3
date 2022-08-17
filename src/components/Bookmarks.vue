<template>
<section class="p-2">
  <div class="container">
    <div class="row text-center g-4 card-group-margin-5">
      <div class="col-3" v-for="bookmark in bookmarks" :key="bookmark.id">
        <Bookmark :bookmark="bookmark" 
          @save-bookmark="$emit('save-bookmark', $event)"
          @delete-bookmark="$emit('delete-bookmark', $event)" />
      </div>
    </div>
  </div>
</section>
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
</style>