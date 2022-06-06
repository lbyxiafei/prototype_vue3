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
  <button @click="clearInputs">Clear</button>
  <button @click="saveBookmark">Save</button>
</div>
</template>

<script>
export default{
  name:"AddBookmark",
  data() {
    return {
      bookmarkName: "",
      bookmarkUrl: "",
      tagInStr: "",
      tags: [],
    }
  },
  methods: {
    clearInputs(){
      this.bookmarkName = "";
      this.bookmarkUrl = "";
      this.tagInStr = "";
      this.tags = [];
    },
    saveBookmark(){

    }
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
</style>