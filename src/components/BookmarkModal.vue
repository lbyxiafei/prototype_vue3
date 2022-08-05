<template>
  <Transition @keydown.esc="handleKeyEsc" tabindex="1">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div>
              <label>Name:</label>
              <input v-model="bookmark.title" />
            </div>
            <div>
              <label>Url:</label>
              <input v-model="bookmark.url" />
            </div>
            <div>
              <template v-for="tg in bookmark.tags" :key="tg.name">
                {{tg.name}}<button class="btn btn-close" @click="removeTag(tg.name)">x</button>
              </template>
              <br/>
              <input v-model="newTag"/><button class="btn btn-add" @click="addTag(newTag)">+</button>
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
  data(){
    return {
      newTag: ""
    }
  },
  methods:{
    handleKeyEsc(){
      this.$emit('close-bookmark');
    },
    saveBookmark(){
      this.$emit('save-bookmark', this.bookmark);
      this.$emit('close-bookmark');
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
  props: {
    show: Boolean,
    bookmark: Object
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