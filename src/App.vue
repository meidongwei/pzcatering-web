<template>
  <layout></layout>
</template>
<script>
import layout from '@/components/layout'
export default {
  name: 'app',
  components: {
    layout
  }
}
</script>
<style>
body {
  background-color: #f5f7f9;
}
/* 去掉上导航与侧导航的 border */
.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}
.ivu-menu-vertical.ivu-menu-light:after {
  width: 0;
}
</style>
