<template>
<div class="container" @dblclick="showBookmarkModal = true" @click.middle="$emit('delete-bookmark', bookmark)">
  <div class="card border-primary bg-light text-secondary m-1">
    <div class="h1 mb-3 text-dark">
      <i class="bi" 
        style="cursor:pointer;" 
        @click="openUrl" 
        :class="[tagIcon]"></i>
    </div>
    <div class="card-text"><a :href="bookmark.url" target="_blank">{{bookmark.title}}</a></div>
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
    openUrl() {
      window.open(this.bookmark.url, '_newtab');
    },
    getTagIcon(){
      const tags = new Set();
      this.bookmark.tags.forEach(tag => {
        tags.add(tag.name);
      });
      if(tags.has("watch")) return "bi-eye";
      if(tags.has("todo")) return "bi-list-check";
      if(tags.has("training")) return "bi-battery-charging";
      if(tags.has("algo")) return "bi-lightning";
      if(tags.has("cheatsheet")) return "bi-lightbulb";
      if(tags.has("communication")) return "bi-wechat";
      if(tags.has("jobs")) return "bi-linkedin";
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
</style>