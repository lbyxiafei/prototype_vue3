<template>
<Transition class="noselect" @keydown.esc="handleEsc" tabindex="1">
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper" @dblclick.self="handleEsc">
      <div class="modal-container">
        <div class="modal-body">
          <div class="post-title">
            <label>Title:</label>
            <input v-model="post.title" />
          </div>
          <div class="post-content-container">
            <QuillEditor theme="snow" v-model:content="post.content" contentType="text" />
          </div>
          <div class="post-tags">
            <template v-for="tg in post.tags" :key="tg.name">
              {{tg.name}}<button class="btn btn-close" @click="removeTag(tg.name)"></button>
            </template>
            <br/>
            <input v-model="newTag"/>
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
.btn-close {
  background-color: red;
  margin-right: 1px;
}
.btn-add {
  background-color: green;
}
.post-title{
  text-align: center;
}
.post-tags{
  text-align: center;
}
.post-content-container{
  height: 40vh;
  text-align: center;
}
.post-content{
  height: 100%;
  width: 100%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 50%;
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  height: 100%;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>