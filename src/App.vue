<template>
<div class="view-container">
  <header>
    <HeaderView />
  </header>
  <main>
    <RouterView 
      :bookmarks="filteredBookmarks"
      :posts="filteredPosts"
      :tags="computedRouterTags" />
  </main>
  <nav>
    <SiderLeftView 
      :tags="computedRouterTags"
      @click-tag="clickTag" />
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
      selectedTag: "",
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
      console.log(tag);
      this.selectedTag = tag;
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
  computed: {
    filteredBookmarks() {
      console.log(this.bookmarks + '?');
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
