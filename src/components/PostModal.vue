<template>
<Transition class="noselect" @keydown.esc="handleEsc" tabindex="1">
  <div class="modal-mask" v-if="show">
    <div class="modal-wrapper" @dblclick.self="handleEsc">
      <div class="modal-container">
        <div class="modal-body">
          <div class="post-title">
            <input v-model="post.title" placeholder="title" />
          </div>
          <div class="post-content-container">
            <v-md-editor v-model="post.content"></v-md-editor>
          </div>
          <div class="tags-container">
            <template v-for="tg in post.tags" :key="tg.name">
              {{tg.name}}<button class="btn btn-close" @click="removeTag(tg.name)"></button>
            </template>
            <br/>
            <input v-model="newTag" placeholder="tags..."/>
            <button class="btn btn-add" @click="addTag(newTag)">+</button>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-default-button" @click="savePost">Submit</button>
          <button class="modal-default-button" @click="$emit('close-post')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
export default {
  name: "PostModal",
  props: {
    show: Boolean,
    post: Object
  },
  data(){
    return {
      newTag: "",
    }
  },
  methods:{
    handleEsc(){
      this.$emit('close-post');
      this.newTag="";
    },
    savePost(){
      this.$emit('save-post', this.post);
      this.$emit('close-post');
      this.newTag="";
    },
    removeTag(tagName){
      this.post.tags = this.post.tags.filter(tg => tg.name !== tagName);
    },
    addTag(tagName){
      if(tagName){
        this.post.tags.push({'name':tagName});
      }
      this.newTag="";
    },
  },
}
</script>

<style scoped>
@import '../assets/modal.css';
</style>