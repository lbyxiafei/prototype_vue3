<template>
<div class="container noselect m-1" 
    @dblclick="showPostModal=true" 
    @click.middle="$emit('delete-post', post)">
  <div class="card boarder-secondary h-100">
    <div class="card-body">
      <h5 class="card-title text-dark">{{post.title}}</h5>
      <p class="card-text text-secondary ellipsis">{{post.content}}</p>
    </div>
  </div>
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
</style>