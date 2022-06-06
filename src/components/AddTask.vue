<template>
<div class="container">
  <div id="bookmark" v-show="enableAddBookmark">
    <div>
      <label>Name:</label>
      <input v-model="bookmarkName">
    </div>
    <div>
      <label>Tags:</label> 
      <input v-model="tagInStr"> 
    </div>
    <div>
      <label>Url:</label>
      <input v-model="bookmarkUrl">
    </div>
  </div>
  <div id="post" v-show="enableAddPost">
    <label>Title:</label>
    <input v-model="postTitle">
    <label>Tags:</label> 
    <input v-model="tagInStr"> 
    <div>
      <textarea id="post-editor" v-model="postContent"></textarea>
    </div>
  </div>
  <button @click="clearInputs">Clear</button>
  <button @click="$emit('add-task', tagInStr)">Save</button>
</div>
</template>

<script>
export default{
  name:"AddTask",
  data() {
    return {
      bookmarkName: "",
      bookmarkUrl: "",
      postTitle: "",
      postContent: "",
      tagInStr: "",
      tags: [],
    }
  },
  methods: {
    clearInputs(){
      this.bookmarkName = "";
      this.bookmarkUrl = "";
      this.postTitle = "";
      this.postContent = "";
      this.tagInStr = "";
      this.tags = [];
    },
  },
  computed: {
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
  padding-bottom: 3px;
  min-height: 30%;
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
  width: 40%;
}
</style>