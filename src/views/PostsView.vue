<template>
  <div class="view-container">
    <!-- <Header @save-post="savePost" /> -->
    <div class="view-body">
      <!-- <SiderLeft :tags="postTags" @click-tag="clickTag" /> -->
      <Posts :posts="filteredPosts" 
        @save-post="savePost"
        @delete-post="deletePost" />
    </div>
  </div>
</template>

<script>
// import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue';

export default{
  name: "PostsView",
  props: {
    tags: Array,
    posts: Array,
  },
  data(){
    return {
      baseUrl: import.meta.env.VITE_NOTES_URL,
      tag: null,
    }
  },
  components: {
    Posts
  },
  methods:{
    clickTag(tag){
      this.tag=tag;
    },
    async savePost(post){
      let url=this.baseUrl + 'api/notes/posts/', reqMethod='POST';
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
        const url = this.baseUrl + `api/notes/posts/${post.id}/`;
        await fetch(url, {
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
      const url = this.baseUrl + 'api/notes/posts/';
      const res = await fetch(url);
      return await res.json();
    }
  },
  computed: {
    postTags(){
      let tags=[];
      this.posts.forEach(pst => {
        pst.tags.forEach(tg => {
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
