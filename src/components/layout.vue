<template>
  <div class="layout">
    <Navbar></Navbar>
    <router-view></router-view>
    <div class="footer">
      <p>品智餐饮管理系统 版本号V2.2</p>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex: 1;
  position: relative;
}
.slider {
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  overflow-y: scroll;
  padding-bottom: 50px;
}
.slider-h2 {
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
}
.content {
  position: absolute;
  right: 0;
  left: 240px;
}
.content-breadcrumb {
  margin: 15px 20px 0 20px;
}
.footer {
  background-color: #fff;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
</style>
