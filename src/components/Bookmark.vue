<template>
  <div>
    <h3>{{bookmark.url}}</h3>
  </div>
</template>

<script>
export default{
  name: "Bookmark",
  props:{
    bookmark: Object
  }
}

</script>