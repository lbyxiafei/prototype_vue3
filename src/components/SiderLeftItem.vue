<template>
  <div class="container" :id="'sider_'+tag" @click="$emit('click-tag',tag)">
    <h3>{{tag}}</h3>
  </div>
</template>

<script>
export default{
  name: "SiderLeftItem",
  data() {
    return {
      tagSelected: false
    }
  },
  props:{
    tag: String
  },
  methods:{
  }
}
</script>

<style scoped>
@import '../assets/base.css';
.container{
  cursor: pointer;
}
.container:hover{
  font-size: 110%;
}
.container:active{
  background-color: red;
}
</style>

