<template>
<div class="view-container">
  <header class="noselect">
    <HeaderView 
      @save-bookmark="saveBookmark"
      @save-post="savePost" />
  </header>
  <main>
    <RouterView 
      :bookmarks="filteredBookmarks"
      :posts="filteredPosts"
      :tags="computedRouterTags" 
      @save-bookmark="saveBookmark"
      @delete-bookmark="deleteBookmark"
      @save-post="savePost" 
      @delete-post="deletePost" />
  </main>
  <nav>
    <SiderLeftView 
      :tags="computedRouterTags"
      @click-tag="clickTag" />
  </nav>
  <aside class="noselect">
    Recent
  </aside>
  <footer class="text-white text-center position-relative noselect">
    <div class="container">
      <p class="lead">Copyright &copy; 2022 Binyan Li</p>
      <!-- <a href="#" class="position-absolute bottom-0 end-0 p-5">
        <i class="bi bi-arrow-up-circle h1"></i>
      </a> -->
    </div>
  </footer>
</div>
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderView from './views/HeaderView.vue'
import SiderLeftView from './views/SiderLeftView.vue';

export default{
  name: "App",
  data() {
    return {
      baseUrl: import.meta.env.VITE_NOTES_URL,
      bookmarks: [],
      posts: [],
      tags: [],
      selectedTag: null,
    }
  },
  components:{
    RouterView,
    HeaderView,
    SiderLeftView,
    SiderLeftView
  },
  async created(){
    this.bookmarks = await this.fetchBookmarks();
    this.posts= await this.fetchPosts();
  },
  methods: {
    clickTag(tag) {
      this.selectedTag = tag;
    },
    async fetchQuery(url) {
      const res = await fetch(url);
      return await res.json();
    },
    async fetchBookmarks() {
      return await this.fetchQuery(this.baseUrl + 'api/notes/bookmarks/');
    },
    async saveBookmark(bookmark){
      let url=this.baseUrl + 'api/notes/bookmarks/', reqMethod='POST';
      if(bookmark.id){
        url+=bookmark.id+'/';
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bookmark),
      });
      if(!bookmark.id){
        const data = await res.json()
        this.bookmarks.push(data);
      }
    },
    async deleteBookmark(bookmark){
      if(confirm(`Sure to delete ${bookmark.title}?`)){
        const url = this.baseUrl + `api/notes/bookmarks/${bookmark.id}/`;
        await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(
          response => {
            if(response.status===200){
              this.bookmarks=this.bookmarks.filter(e => e.id!==bookmark.id);
            }
          }
        );
      }
    },
    async fetchPosts() {
      return await this.fetchQuery(this.baseUrl + 'api/notes/posts/');
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
  },
  computed: {
    filteredBookmarks() {
      return this.selectedTag===null 
        ? this.bookmarks 
        : this.bookmarks.filter(bk => bk.tags.some(t => t.name===this.selectedTag));
    },
    filteredPosts() {
      return this.selectedTag===null 
        ? this.posts
        : this.posts.filter(p => p.tags.some(t => t.name===this.selectedTag));
    },
    computedRouterTags() {
      let tags=[];
      if(this.$route.name==='bookmarks') {
        this.bookmarks.forEach(bmk => {
          bmk.tags.forEach(tg => {
            if(!tags.includes(tg.name)){
              tags.push(tg.name);
            }
          });
        });
      }
      else if(this.$route.name==='posts') {
        this.posts.forEach(pst => {
          pst.tags.forEach(tg => {
            if(!tags.includes(tg.name)){
              tags.push(tg.name);
            }
          });
        });
      }
      return tags;
    },
  },
}
</script>

<style scoped>
@import './assets/base.css';
</style>
