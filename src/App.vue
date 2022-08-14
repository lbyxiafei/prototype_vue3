<template>
<div class="view-container">
  <header>
    <HeaderView 
      @select-bookmarks="selectBookmarks"
      @select-posts="selectPosts" />
  </header>
  <main>
    <RouterView 
      :bookmarks="bookmarks"
      :posts="posts"
      :tags="tags" />
  </main>
  <nav>
    <SiderLeftView />
  </nav>
  <aside>
    RightSideBar
  </aside>
  <footer>
    Footer
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
    }
  },
  methods: {
    selectBookmarks() {
      console.log('select bmk');
    },
    selectPosts() {
      console.log('select pst');
    },
    async fetchQuery(url) {
      const res = await fetch(url);
      return await res.json();
    },
    async fetchBookmarks() {
      return await this.fetchQuery(this.baseUrl + 'api/notes/bookmarks/');
    },
    async fetchPosts() {
      return await this.fetchQuery(this.baseUrl + 'api/notes/posts/');
    },
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
  }
}
</script>

<style scoped>
@import './assets/base.css';
</style>
