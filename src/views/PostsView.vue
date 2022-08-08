<template>
  <div class="view-container">
    <Header @save-post="savePost" />
    <div class="view-body">
      <SiderLeft :tags="postTags" @click-tag="clickTag" />
      <Posts :posts="filteredPosts" 
        @save-post="savePost"
        @delete-post="deletePost" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue';
import SiderLeft from '../components/SiderLeft.vue';

export default{
  name: "PostsView",
  data(){
    return {
      tag: null,
      posts: []
    }
  },
  components: {
    Header,
    SiderLeft,
    Posts
  },
  methods:{
    clickTag(tag){
      this.tag=tag;
    },
    async savePost(post){
      let url='api/notes/posts/', reqMethod='POST';
      if(post.id){
        url+=post.id+'/';
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post),
      })
      if(!post.id){
        const data = await res.json()
        this.posts.push(data);
      }
    },
    async deletePost(post){
      if(confirm(`Sure to delete ${post.title}?`)){
        await fetch(`api/notes/posts/${post.id}/`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(
          response => {
            if(response.status===200){
              this.posts=this.posts.filter(e => e.id!==post.id);
            }
          }
        );
      }
    },
    async fetchPosts() {
      const res = await fetch('api/notes/posts/');
      console.log(res);
      const data = await res.json();
      return data;
    }
  },
  async created(){
    this.posts= await this.fetchPosts();
  },
  computed: {
    postTags(){
      let tags=[];
      this.posts.forEach(bmk => {
        bmk.tags.forEach(tg => {
          if(!tags.includes(tg.name)){
            tags.push(tg.name);
          }
        });
      });
      return tags;
    },
    filteredPosts(){
      return this.tag===null 
        ? this.posts
        : this.posts.filter(p => p.tags.some(t => t.name===this.tag));
    }
  },
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
