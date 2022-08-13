<template>
  <div class="container">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/bookmarks" @click="bookmarkClicked">Bookmarks</RouterLink> |
    <RouterLink to="/posts">Posts</RouterLink> |
    <RouterLink to="/calendar">Calendar</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <i v-show="enableAddTask && !showAddTask" @click="toggleAddTask" class="fa-solid fa-plus"></i>
    <i v-show="enableAddTask && showAddTask" @click="toggleAddTask" class="fa-solid fa-circle-xmark"></i>
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
    bookmarkClicked() {
      console.log("bookmark clicked!");
    }
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
