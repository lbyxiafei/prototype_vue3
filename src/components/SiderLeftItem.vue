<template>
  <div class="item-container" :id="'sider_'+tag" @click="$emit('click-tag',tag)">
    <div class="item">
      <i class="bi bi-laptop"></i>
      <div class="container">
        <h3 class="text-dark">{{tag}}</h3>
      </div>
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

.item{
  display: flex;
  justify-content: space-between;
}
.item h3{
  text-align: center;
}
.item i {
  color: gray;
  font-size: 1.5em;
}
</style>
