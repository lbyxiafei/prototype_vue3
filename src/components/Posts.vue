<template>
<div class="container">
  <div class="post" v-for="post in posts" :key="post.id">
    <Post :post="post" @save-post="$emit('save-post', $event)"/>
  </div>
</div>
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
  emits: ['save-post']
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 5px;
  height: 100%;
  width: 100%;
}
.post{
  display: block;
  height: 100%;
  width: 100%;
}
</style>