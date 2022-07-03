<template>
  <div class="sider">
    <div v-for="tag in tags">
      <h4>{{tag}}</h4>
    </div>
  </div>
</template>

<script>
import SiderLeftItem from './SiderLeftItem.vue';

export default{
  name:"SiderLeft",
  props: {
    tags: Array
  },
  components: {
    SiderLeftItem
  }
}
</script>

<style scoped>
@import '../assets/base.css';
.sider{
  background-color: aqua;
  padding-left: 1vw;
  padding-right: 1vw;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>