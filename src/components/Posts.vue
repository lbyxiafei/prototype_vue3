<template>
<section class="p-2">
  <div class="container">
    <div class="row text-center g-4 card-group-margin-5">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <Post :post="post" 
          @save-post="$emit('save-post', $event)"
          @delete-post="$emit('delete-post', $event)" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Post from './Post.vue'

export default{
  name: "Posts",
  props: {
    posts: Array
  },
  components: {
    Post
  },
  emits: ['save-post', 'delete-post']
}
</script>

<style scoped>
@import '../assets/base.css';
</style>