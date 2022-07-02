<template>
  <div class="container">
    <h3>{{post.title}}</h3>
    <i class="fa-regular fa-pen-to-square" @click="showPostModal= true"></i>
    <i class="fa-regular fa-trash-can"></i>
  </div>
  <Teleport to="body">
    <PostModal
      :show="showPostModal" 
      :title="post.title"
      :post="post" 
      :tagsInStr="post.tags.join(',')"
      @save-post="$emit('save-post', $event)" 
      @close-post="showPostModal = false" />
  </Teleport>
</template>

<script>
import PostModal from "./PostModal.vue";

export default{
  name: "Post",
  data(){
    return {
      showPostModal: false
    }
  },
  props:{
    post: Object
  },
  components: {
    PostModal
  },
  emits: ['save-post'],
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