<template>
<div class="container">
  <div id="bookmark" v-show="enableAddBookmark">
    <div>
      <label>Name:</label>
      <input v-model="bookmark.name">
    </div>
    <div>
      <label>Tags:</label> 
      <input v-model="tagInStr"> 
    </div>
    <div>
      <label>Url:</label>
      <input v-model="bookmark.url">
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
      bookmark:{
        name: "",
        url: "",
        tags: [],
      },
      tagInStr: "",
    }
  },
  methods: {
    clearInputs(){
      this.bookmark = {
        name: "",
        url: "",
        tags: [],
      };
      this.tagInStr = "";
    },
    saveBookmark(){
      this.bookmark.tags = this.tagInStr.split(",");
      this.$emit('save-bookmark', this.bookmark);
      this.clearInputs();
    }
  },
  computed: {
    enableAddBookmark(){
      return this.$route.name === 'bookmarks';
    },
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