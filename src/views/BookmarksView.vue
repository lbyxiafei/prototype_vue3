<template>
  <div class="view-container">
    <!-- <Header @save-bookmark="saveBookmark" /> -->
    <div class="view-body">
      <!-- <SiderLeft :tags="bookmarkTags" @click-tag="clickTag" /> -->
      <Bookmarks :bookmarks="filteredBookmarks" 
        @save-bookmark="saveBookmark"
        @delete-bookmark="deleteBookmark" />
    </div>
  </div>
</template>

<script>
// import Header from '../components/Header.vue';
import Bookmarks from '../components/Bookmarks.vue'

export default{
  name: "BookmarksView",
  props: {
    bookmarks: Array,
    tags: Array,
  },
  data(){
    return {
      baseUrl: import.meta.env.VITE_NOTES_URL,
      tag: null,
      // bookmarks:[]
    }
  },
  components:{
    Bookmarks
  },
  methods:{
    clickTag(tag){
      this.tag=tag;
    },
    async saveBookmark(bookmark){
      let url=this.baseUrl + 'api/notes/bookmarks/', reqMethod='POST';
      if(bookmark.id){
        url+=bookmark.id+'/';
        reqMethod='PUT';
      }
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          'Content-type': 'application/json'
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
        const url = this.baseUrl + `api/notes/bookmarks/${bookmark.id}/`;
        await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(
          response => {
            if(response.status===200){
              this.bookmarks=this.bookmarks.filter(e => e.id!==bookmark.id);
            }
          }
        );
      }
    },
    async fetchBookmarks() {
      const url = this.baseUrl + 'api/notes/bookmarks/';
      const res = await fetch(url);
      return await res.json();
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
}
</script>

<style scoped>
@import '../assets/base.css';
</style>