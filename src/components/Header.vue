<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/bookmarks">Bookmarks</RouterLink> |
      <RouterLink to="/posts">Posts</RouterLink> |
      <RouterLink to="/calendar">Calendar</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
      <i @click="toggleAddTask" class="fa-solid fa-plus"></i>
    </nav>
  </header>
  <AddTask v-show="showAddTask" />
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
}
</script>

<style scoped>
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
.fa-plus{
  margin-top: 1vh;
  color: purple;
  position: absolute;
  right: 5vh;
  top: 0.8vh;
  cursor: pointer;
}
.fa-plus:hover{
  background-color: yellow;
  font-size: 120%;
}
</style>
