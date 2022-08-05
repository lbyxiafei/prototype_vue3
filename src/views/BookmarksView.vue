<template>
  <div class="view-container">
    <Header @save-bookmark="saveBookmark" />
    <div class="view-body">
      <SiderLeft 
        :tags="bookmarkTags" 
        @click-tag="clickTag" />
      <Bookmarks 
        :bookmarks="filteredBookmarks" 
        @save-bookmark="saveBookmark"
        @delete-bookmark="deleteBookmark" />
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
      let url='api/notes/bookmarks/', reqMethod='POST';
      if(bookmark.id){
        url+=bookmark.id+'/';
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(bookmark),
      });
      if(!bookmark.id){
        const data = await res.json()
        this.bookmarks.push(data);
      }
    },
    async deleteBookmark(bookmark){
      if(confirm(`Sure to delete ${bookmark.title}?`)){
        await fetch(`api/notes/bookmarks/${bookmark.id}/`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          }
        }).then(
          response => {
            if(response.status===200 || response.status===204){
              this.bookmarks=this.bookmarks.filter(e => e.id!==bookmark.id);
            }
          }
        );
      }
    },
    async fetchBookmarks() {
      const res = await fetch('api/notes/bookmarks/');
      const data = await res.json();
      return data;
    }
  },
  computed: {
    bookmarkTags(){
      let tags=[];
      this.bookmarks.forEach(bmk => {
        bmk.tags.forEach(tg => {
          if(!tags.includes(tg.name)){
            tags.push(tg.name);
          }
        });
      });
      return tags;
    },
    filteredBookmarks(){
      return this.tag===null 
        ? this.bookmarks 
        : this.bookmarks.filter(bk => bk.tags.some(t => t.name===this.tag));
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