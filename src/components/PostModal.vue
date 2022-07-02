<template>
  <Transition @keydown.esc="handleKeyEsc" tabindex="1">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">{{title}}</div>
          <div class="modal-body">
            <div>
              <label>Title:</label>
              <input v-model="post.title" />
            </div>
            <div>
              <label>Tags:</label>
              <input v-model="tagsInStr" />
            </div>
            <div>
              <textarea v-model="post.content" />
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
  methods:{
    handleKeyEsc(){
      this.$emit('close-post');
    },
    savePost(){
      this.post.tags = this.tagsInStr.split(",");
      this.$emit('save-post', this.post);
      this.$emit('close-post');
    },
  },
  props: {
    show: Boolean,
    title: String,
    tagsInStr: String,
    post: Object
  },
}
</script>

<style scoped>
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
  width: 300px;
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