<template>
  <div class="container" :id="'sider'+tag" @click="clickTag">
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
    clickTag(){
      this.tagSelected = !this.tagSelected;
      if(this.tagSelected) {
        document.querySelector('#sider'+this.tag).setAttribute('style', 'background:wheat');
      }
      else{
        document.querySelector('#sider'+this.tag).setAttribute('style', 'background:null');
      }
    }
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

