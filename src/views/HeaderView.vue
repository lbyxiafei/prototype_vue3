<template>
  <div class="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4" @dblclick.self="toggleAddTask">
    <div class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <RouterLink class="nav-link px-2 link-dark text-primary" to="/">Home</RouterLink>
      <RouterLink class="nav-link px-2 link-dark" to="/bookmarks">Bookmarks</RouterLink>
      <RouterLink class="nav-link px-2 link-dark" to="/posts">Posts</RouterLink>
      <!-- <RouterLink class="nav-link px-2 link-dark" to="/calendar">Calendar</RouterLink> -->
      <a class="nav-link px-2 link-dark" href="https://google.com" target="_blank">Calendar</a>
      <RouterLink class="nav-link px-2 link-dark" to="/about">About</RouterLink>
    </div>

    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
      <input type="search" class="form-control form-control-dark" placeholder="Search...">
    </form>

    <div class="col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2">Login</button>
      <button type="button" class="btn btn-primary me-2">Sign-up</button>
    </div>
  </div>

  <Teleport to="body">
    <BookmarkModal 
      :show="showAddTask && onBookmarksView" 
      :bookmark="{title:'',url:'',tags:[]}" 
      @save-bookmark="$emit('save-bookmark', $event)" 
      @close-bookmark="showAddTask = false" />
  </Teleport>

  <Teleport to="body">
    <PostModal
      :show="showAddTask && onPostsView" 
      :post="{title:'',tags:[],content:''}" 
      @save-post="$emit('save-post', $event)" 
      @close-post="showAddTask = false" />
  </Teleport>
</template>

<script>
import BookmarkModal from '../components/BookmarkModal.vue';
import PostModal from '../components/PostModal.vue';
import { RouterLink } from 'vue-router';

export default{
  name: "HeaderView",
  data(){
    return{
      showAddTask: false,
    }
  },
  components:{
      RouterLink,
      BookmarkModal,
      PostModal,
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask;
    },
  },
  computed:{
    enableAddTask(){
      return this.$route.name==='bookmarks' || this.$route.name==='posts';
    },
    onBookmarksView(){
      return this.$route.name === 'bookmarks';
    },
    onPostsView(){
      return this.$route.name === 'posts';
    }
  },
  emits: ['save-bookmark', 'save-post'],
}
</script>

<style scoped>
@import '../assets/base.css';
</style>
