<template>
  <div class="container">
    <h3>{{post.title}}</h3>
    <i class="fa-regular fa-pen-to-square" @click="showPostModal= true" />
    <i class="fa-regular fa-trash-can" @click="$emit('delete-post', post)" />
  </div>
  <Teleport to="body">
    <PostModal
      :show="showPostModal" 
      :post="post" 
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
  emits: ['save-post', 'delete-post'],
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