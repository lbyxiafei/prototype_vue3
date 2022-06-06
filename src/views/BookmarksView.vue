<template>
<div class="view-container">
  <Header />
  <div class="view-body">
    <SiderLeft />
    <Bookmarks :bookmarks="bookmarks"/>
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