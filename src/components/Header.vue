<template>
<div class="container">
  <div class="header">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/bookmarks">Bookmarks</RouterLink> |
    <RouterLink to="/posts">Posts</RouterLink> |
    <RouterLink to="/calendar">Calendar</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <i v-show="enableAddTask && !showAddTask" @click="toggleAddTask" class="fa-solid fa-plus"></i>
    <i v-show="enableAddTask && showAddTask" @click="toggleAddTask" class="fa-solid fa-circle-xmark"></i>
  </div>
  <div class="task" >
    <AddBookmark v-show="showAddTask && enableAddBookmark" 
      @save-bookmark="$emit('save-bookmark', $event)" />
    <AddPost v-show="showAddTask && enableAddPost" 
      @save-post="$emit('save-post', $event)" />
  </div>
</div>
</template>

<script>
import AddBookmark from './AddBookmark.vue';
import AddPost from './AddPost.vue';
import { RouterLink} from 'vue-router';

export default{
  name: "Header",
  data(){
    return{
      showAddTask: false,
    }
  },
  components:{
      RouterLink,
      AddBookmark,
      AddPost
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
    enableAddBookmark(){
      return this.$route.name === 'bookmarks';
    },
    enableAddPost(){
      return this.$route.name === 'posts';
    }
  },
  emits: ['save-bookmark', 'save-post'],
}
</script>

<style scoped>
.container{
  display: block;
}
.header {
  position: sticky;
  background-color: azure;
  width: 100%;
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
}
.task {
  display: block;
}
.fa-solid{
  position: relative;
  right: -20vw;
  cursor: pointer;
}
.fa-plus{
  color: purple;
}
.fa-plus:hover{
  font-size: 110%;
}
.fa-circle-xmark{
  color: red;
}
.fa-circle-xmark:hover{
  font-size: 110%;
}
</style>
