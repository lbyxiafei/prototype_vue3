<template>
  <div class="view-container">
    <Header @save-post="savePost" />
    <div class="view-body">
      <SiderLeft />
      <Posts :posts="posts" @save-post="savePost"/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue'
import SiderLeft from '../components/SiderLeft.vue'

export default{
  name: "PostsView",
  data(){
    return {
      posts: []
    }
  },
  components: {
    Header,
    SiderLeft,
    Posts
  },
  methods:{
    async savePost(post){
      let url='api/posts', reqMethod='POST';
      if(post.id){
        url+='/'+post.id;
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post),
      })
      if(!post.id){
        const data = await res.json()
        this.posts.push(data);
      }
    },
    async fetchPosts() {
      const res = await fetch('api/notes/posts/');
      const data = await res.json();
      return data;
    }
  },
  async created(){
    this.posts= await this.fetchPosts();
  }
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
