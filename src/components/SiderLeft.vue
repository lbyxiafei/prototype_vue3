<template>
<div class="sider">
    <h2>All</h2>
    <h2>Algorithm</h2>
    <h2>Github</h2>
    <h2>SideProject</h2>
    <h2>Cheatsheet</h2>
    <h2>Archive</h2>
    <h2>Work</h2>
</div>
</template>

<script>
import SiderItem from './SiderItem.vue';

export default{
    name:"SiderLeft",
    components: {
        SiderItem
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
    vertical-align: middle;
}
</style>