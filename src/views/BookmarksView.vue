<template>
  <div class="view-container">
    <Header @save-bookmark="saveBookmark" />
    <div class="view-body">
      <SiderLeft 
        :tags="bookmarkTags" 
        @click-tag="clickTag" />
      <Bookmarks 
        :bookmarks="filteredBookmarks" 
        @save-bookmark="saveBookmark"/>
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
      tag: null,
      bookmarks:[],
      bookmarkTagMap:{}
    }
  },
  components:{
    Header,
    SiderLeft,
    Bookmarks
  },
  methods:{
    clickTag(tag){
      this.tag=tag;
    },
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
      if(!bookmark.id){
        const data = await res.json()
        this.bookmarks.push(data);
      }
    },
    async fetchBookmarks() {
      const res = await fetch('api/bookmarks');
      const data = await res.json();
      return data;
    }
  },
  computed: {
    bookmarkTags(){
      let tagSet=new Set();
      for(var i in this.bookmarks){
        for(var j in this.bookmarks[i].tags){
          let tag=this.bookmarks[i].tags[j];
          tagSet.add(tag);
        }
      }
      return Array.from(tagSet);
    },
    filteredBookmarks(){
      return this.tag===null 
        ? this.bookmarks 
        : this.bookmarks.filter(bk => bk.tags.some(t => t===this.tag));
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