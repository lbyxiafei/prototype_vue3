<template>
<div class="view-body">
  <Posts :posts="posts" 
    @save-post="$emit('save-post', $event)"
    @delete-post="$emit('delete-post', $event)" />
</div>
</template>

<script>
import Posts from '../components/Posts.vue';

export default{
  name: "PostsView",
  props: {
    tags: Array,
    posts: Array,
  },
  data(){
    return {
    }
  },
  components: {
    Posts
  },
  methods:{
  },
  computed: {
  },
  emits: ['save-post', 'delete-post'],
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
