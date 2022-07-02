<template>
<div class="view-container">
  <Header @save-bookmark="saveBookmark" />
  <div class="view-body">
    <SiderLeft />
    <Bookmarks :bookmarks="bookmarks" @save-bookmark="saveBookmark"/>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Bookmarks from '../components/Bookmarks.vue'
import SiderLeft from '../components/SiderLeft.vue'

export default{
  name: "BookmarksView",
  data(){
    return {
      bookmarks:[]
    }
  },
  components:{
    Header,
    SiderLeft,
    Bookmarks
  },
  methods:{
    async saveBookmark(bookmark){
      let url='api/bookmarks', reqMethod='POST';
      if(bookmark.id){
        url+='/'+bookmark.id;
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(bookmark),
      })
      const data = await res.json()
      if(!bookmark.id){
        this.bookmarks.push(data);
      }
    },
    async fetchBookmarks() {
      const res = await fetch('api/bookmarks');
      const data = await res.json();
      return data;
    }
  },
  async created(){
    this.bookmarks = await this.fetchBookmarks();
  }
}
</script>

<style scoped>
@import '../assets/base.css';
</style>