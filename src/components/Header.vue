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
    <AddTask v-show="showAddTask && enableAddTask"/>
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
