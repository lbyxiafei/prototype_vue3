<template>
<div class="container">
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/bookmarks">Bookmarks</RouterLink> |
      <RouterLink to="/posts">Posts</RouterLink> |
      <RouterLink to="/calendar">Calendar</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
      <i v-show="enableAddTask" @click="toggleAddTask" class="fa-solid fa-plus"></i>
    </nav>
  </header>
  <div class="task" v-show="showAddTask && enableAddTask">
    <AddTask />
  </div>
</div>
</template>

<script>
import AddTask from './AddTask.vue';
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
      AddTask
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask;
    }
  },
  computed:{
    enableAddTask(){
      if(this.$route.name === 'bookmarks' || this.$route.name === 'posts'){
        return true;
      }
      return false;
    }
  },
}
</script>

<style scoped>
.container{
  display: block;
}
header {
  padding-top: 1vh;
  min-height: 3vh;
  background-color: azure;
}
nav {
  width: 100%;
  display: inline-block;
  font-size: 1.3rem;
  text-align: center;
}
.task {
  display: block;
}
.fa-plus{
  position: fixed;
  padding-top: 0.4vh;
  color: purple;
  right: 5vh;
  cursor: pointer;
}
.fa-plus:hover{
  background-color: yellow;
  font-size: 120%;
}
</style>
