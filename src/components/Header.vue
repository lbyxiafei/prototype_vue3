<template>
  <header>
    <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/bookmarks">Bookmarks</RouterLink> |
    <RouterLink to="/posts">Posts</RouterLink> |
    <RouterLink to="/calendar">Calendar</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink} from 'vue-router'
export default{
    name: "Header",
    components:{
        RouterLink
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
</style>
