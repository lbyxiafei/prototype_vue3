<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/bookmarks">Bookmarks</RouterLink> |
      <RouterLink to="/posts">Posts</RouterLink> |
      <RouterLink to="/calendar">Calendar</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
      <i @click="onClick" class="fa-solid fa-plus"></i>
    </nav>
  </header>
</template>

<script>
import { RouterLink} from 'vue-router'
export default{
    name: "Header",
    components:{
        RouterLink
    },
    methods:{
      onClick(e){
        console.log(e);
      }
    }
}
</script>

<style scoped>
nav {
  width: 100%;
  display: inline-block;
  font-size: 1.3rem;
  text-align: center;
}
.fa-plus{
  color: purple;
  position: absolute;
  right: 5vh;
  top: 1.3vh;
}
.fa-plus:hover{
  background-color: yellow;
  font-size: 120%;
}
</style>
