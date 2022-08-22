<template>
<Transition class="noselect" @keydown.esc="handleEsc" tabindex="1">
  <div v-if="show" class="modal-mask" >
    <div class="modal-wrapper" @dblclick.self="handleEsc">
      <div class="modal-container bookmark-modal-container">
        <div class="modal-body">
          <div class="bookmark-title">
            <input v-model="bookmark.title" placeholder="title" />
          </div>
          <div class="bookmark-url">
            <input v-model="bookmark.url" placeholder="url" />
          </div>
          <div class="tags-container">
            <template v-for="tg in bookmark.tags" :key="tg.name">
              {{tg.name}}<button class="btn btn-close" @click="removeTag(tg.name)"></button>
            </template>
            <br/>
            <input v-model="newTag" placeholder="tags..."/>
            <button class="btn btn-add" @click="addTag(newTag)">+</button>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-default-button" @click="saveBookmark">Submit</button>
          <button class="modal-default-button" @click="$emit('close-bookmark')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
export default {
  name: "BookmarkModal",
  props: {
    show: Boolean,
    bookmark: Object
  },
  data(){
    return {
      newTag: ""
    }
  },
  methods:{
    handleEsc(){
      this.$emit('close-bookmark');
      this.newTag = "";
    },
    saveBookmark(){
      this.$emit('save-bookmark', this.bookmark);
      this.$emit('close-bookmark');
      this.newTag = "";
    },
    removeTag(tagName){
      this.bookmark.tags = this.bookmark.tags.filter(tg => tg.name !== tagName);
    },
    addTag(tagName){
      if(tagName){
        this.bookmark.tags.push({'name':tagName});
      }
      this.newTag="";
    }
  },
}
</script>

<style scoped>
@import '../assets/modal.css';
</style>