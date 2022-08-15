<template>
<div class="view-body">
  <Bookmarks :bookmarks="bookmarks" 
    @save-bookmark="$emit('save-bookmark', $event)"
    @delete-bookmark="$emit('delete-bookmark', $event)" />
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
    }
  },
  components:{
    Bookmarks
  },
  methods:{
  },
  computed: {
  },
  emits: ['save-bookmark', 'delete-bookmark'],
}
</script>

<style scoped>
@import '../assets/base.css';
</style>