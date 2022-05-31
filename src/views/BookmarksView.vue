<template>
  <Bookmarks :bookmarks="bookmarks"/>
</template>

<script>
import Bookmarks from '../components/Bookmarks.vue'

export default{
  name: "BookmarksView",
  data(){
    return {
      bookmarks:[]
    }
  },
  components:{
    Bookmarks
  },
  methods:{
    async fetchBookmarks() {
      // const res = await fetch('http://localhost:5000/bookmarks')
      const res = await fetch('api/bookmarks')
      const data = await res.json()
      return data
    }
  },
  async created(){
    this.bookmarks = await this.fetchBookmarks();
  }
}
</script>

<style scoped>
@import '../assets/base.css'
</style>