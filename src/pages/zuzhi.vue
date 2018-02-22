<template>
  <div class="container">
    <div class="slider">
      <h2 class="slider-h2">商户总部</h2>
      <Menu ref="leftMenu" :active-name="activeName" :open-names="[openName]">
        <Submenu :name="item.openName"
          v-for="(item, index) in subList" :key="index">
          <template slot="title">
            <Icon :type="item.iconType"></Icon>
            {{ item.title }}
          </template>
          <MenuItem :name="menuItem.nameNum"
            v-for="(menuItem, index1) in item.list" :key="menuItem.title"
            @click.native="toPage(index, index1)">{{ menuItem.title }}</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="content">
      <Breadcrumb class="content-breadcrumb">
        <BreadcrumbItem to="/">组织架构</BreadcrumbItem>
        <BreadcrumbItem to="/">{{ breadCrumbTitle }}</BreadcrumbItem>
        <BreadcrumbItem>{{ breadCrumbTitle1 }}</BreadcrumbItem>
      </Breadcrumb>
      <router-view></router-view>
      <div class="footer">
        <p>品智餐饮管理系统 版本号V2.2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadCrumbTitle: '',
      breadCrumbTitle1: '',
      activeName: '',
      openName: '',
      subList: [
        {
          title: '商户总部',
          openName: '1',
          iconType: 'ios-paper',
          list: [
            {
              title: '商户信息',
              nameNum: '1-1',
              url: 'shanghu'
            },
            {
              title: '品牌管理',
              nameNum: '1-2',
              url: 'pinpai'
            },
            {
              title: '区域管理',
              nameNum: '1-3',
              url: 'quyu'
            }
          ]
        },
        {
          title: '门店',
          openName: '2',
          iconType: 'ios-people',
          list: [
            {
              title: '门店类别管理',
              nameNum: '2-1',
              url: 'mendianleibie'
            },
            {
              title: '门店管理',
              nameNum: '2-2',
              url: 'mendianguanli'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toPage (index, index1) {
      this.$router.push({ name: this.subList[index].list[index1].url })
      this.breadCrumbTitle = this.subList[index].title
      this.breadCrumbTitle1 = this.subList[index].list[index1].title
    },
    activeNameOfList () {
      let path = this.$route.path
      for (let i=0;i<this.subList.length;i++) {
        for (let j=0;j<this.subList[i].list.length;j++) {
          if (path.indexOf(this.subList[i].list[j].url) !== -1) {
            this.activeName = this.subList[i].list[j].nameNum
            this.openName = this.subList[i].openName
            this.$nextTick(() => {
              this.$refs.leftMenu.updateOpened()
              this.$refs.leftMenu.updateActiveName()
            })
            this.breadCrumbTitle = this.subList[i].title
            this.breadCrumbTitle1 = this.subList[i].list[j].title
          }
        }
      }
    }
  },
  mounted () {
    this.activeNameOfList()
  }
}
</script>

<style scoped>
</style>
