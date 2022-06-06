<template>
<div class="container">
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
  <button @click="">Save</button>
</div>
</template>

<script>
export default{
  name:"AddPost",
  data() {
    return {
      postTitle: "",
      postContent: "",
      tagInStr: "",
      tags: [],
    }
  },
  methods: {
    clearInputs(){
      this.postTitle = "";
      this.postContent = "";
      this.tagInStr = "";
      this.tags = [];
    },
  },
  computed: {
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