<template>
  <div class="container">
    <h3><a :href="bookmark.url" target="_blank">{{bookmark.name}}</a></h3>
    <i class="fa-regular fa-pen-to-square" @click="showBookmarkModal = true"></i>
    <i class="fa-regular fa-trash-can"></i>
  </div>
  <Teleport to="body">
    <BookmarkModal 
      :show="showBookmarkModal" 
      :title="'Edit '+bookmark.name"
      :bookmark="bookmark" 
      :tagsInStr="bookmark.tags.join(',')"
      @save-bookmark="$emit('save-bookmark', $event)" 
      @close-bookmark="showBookmarkModal = false" />
  </Teleport>
</template>

<script>
import BookmarkModal from './BookmarkModal.vue'

export default{
  name: "Bookmark",
  data(){
    return {
      showBookmarkModal: false
    }
  },
  props:{
    bookmark: Object
  },
  components: {
    BookmarkModal
  },
  emits: ['save-bookmark', 'save-post'],
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  display: block;
  text-align: center;
  background-color: yellowgreen;
}
.fa-regular{
  color: white;
  cursor: pointer;
}
</style>