<template>
  <div class="container">
    <h3><a :href="bookmark.url" target="_blank">{{bookmark.title}}</a></h3>
    <i class="fa-regular fa-pen-to-square" 
      @click="showBookmarkModal = true" />
    <i class="fa-regular fa-trash-can" 
      @click="$emit('delete-bookmark', bookmark)" />
  </div>
  <Teleport to="body">
    <BookmarkModal 
      :show="showBookmarkModal" 
      :bookmark="bookmark" 
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
  methods: {
  },
  emits: ['save-bookmark', 'delete-bookmark'],
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
.fa-regular:hover{
  font-size: 110%;
}
</style>