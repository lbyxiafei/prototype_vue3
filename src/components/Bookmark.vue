<template>
  <div class="container">
    <div class="card border-primary bg-light text-secondary m-1">
      <div class="h1 mb-3 text-dark">
        <i class="bi" :class="[tagIcon]"></i>
      </div>
      <div class="card-text"><a :href="bookmark.url" target="_blank">{{bookmark.title}}</a></div>
      <div class="container">
        <i class="fa-regular fa-pen-to-square text-success" @click="showBookmarkModal = true" />
        <i class="fa-regular fa-trash-can text-secondary" @click="$emit('delete-bookmark', bookmark)" />
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
      tagIcon: this.getTagIcon(),
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
    getTagIcon(){
      const tags = new Set();
      this.bookmark.tags.forEach(tag => {
        tags.add(tag.name);
      });
      if(tags.has("watch")) return "bi-eye";
      if(tags.has("todo")) return "bi-list-check";
      if(tags.has("algo")) return "bi-lightning";
      if(tags.has("cheatsheet")) return "bi-lightbulb";
      if(tags.has("communication")) return "bi-wechat";
      if(tags.has("jobs")) return "bi-linkedin";
      if(tags.has("training")) return "bi-battery-charging";
      if(tags.has("debug")) return "bi-bug";
      if(tags.has("cpp")) return "bi-code";
      return "bi-info-circle";
    }
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