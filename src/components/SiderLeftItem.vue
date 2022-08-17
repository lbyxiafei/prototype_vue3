<template>
  <div class="item-container" :id="'sider_'+tag" @click="$emit('click-tag',tag)">
    <div class="container">
      <i class="bi bi-laptop"></i>
      <h2 class="text-dark">{{tag}}</h2>
    </div>
  </div>
</template>

<script>
export default{
  name: "SiderLeftItem",
  data() {
    return {
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
.item-container{
  cursor: pointer;
}
.item-container:hover{
  font-size: 110%;
}
.item-container:active{
  background-color: red;
}
</style>

