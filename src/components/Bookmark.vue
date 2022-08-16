<template>
  <div class="container bg-light">
    <div class="card bg-light text-secondary">
      <div class="h3 card-title mb-3"><a :href="bookmark.url" target="_blank">{{bookmark.title}}</a></div>
      <div class="card-text"><a :href="bookmark.url" target="_blank">{{bookmark.title}}</a></div>
      <div class="container">
        <i class="fa-regular fa-pen-to-square text-dark" @click="showBookmarkModal = true" />
        <i class="fa-regular fa-trash-can text-dark" @click="$emit('delete-bookmark', bookmark)" />
      </div>
    </div>
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
.fa-regular{
  color: white;
  cursor: pointer;
}
.fa-regular:hover{
  font-size: 110%;
}
</style>