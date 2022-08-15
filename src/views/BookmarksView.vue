<template>
  <div class="view-container">
    <div class="view-body">
      <Bookmarks :bookmarks="bookmarks" 
        @save-bookmark="saveBookmark"
        @delete-bookmark="deleteBookmark" />
    </div>
  </div>
</template>

<script>
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
  },
  computed: {
  },
  emits: ['save-bookmark', 'delete-bookmark'],
}
</script>

<style scoped>
@import '../assets/base.css';
</style>