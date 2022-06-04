<template>
<div class="container">
  <div id="bookmark" v-show="enableAddBookmark">
    <label>Name:</label>
    <input>
    <label>Tags:</label> 
    <input> 
    <label>Url:</label>
    <input>
    <button>Save</button>
  </div>
  <div id="post" v-show="enableAddPost">
    <label>Title:</label>
    <input>
    <label>Tags:</label> 
    <input> 
    <div>
      <textarea id="post-editor"></textarea>
    </div>
    <button>Save</button>
  </div>
</div>
</template>

<script>
export default{
  name:"AddTask",
  computed:{
    enableAddBookmark(){
      return this.$route.name === 'bookmarks';
    },
    enableAddPost(){
      return this.$route.name === 'posts';
    }
  }
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  text-align: center;
  padding-top: 3px;
  height: 100%;
  width: 100%;
  background-color: burlywood;
}
#bookmark{
  display: block;
  text-align: center;
}
#post{
  display: block;
  text-align: center;
}
#post-editor{
  margin-top: 3px;
  height: 40vh;
  width: 30%;
}
</style>