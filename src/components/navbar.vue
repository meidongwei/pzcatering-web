<template>
  <div class="header">
    <div class="header-logo">
      <img src="@/assets/logo.png" alt="logo">
      <span>品智餐饮管理系统</span>
    </div>
    <div class="navbar">
      <Menu mode="horizontal" theme="light" :active-name="activeName">
        <MenuItem v-for="(item, index) in navbarList"
          :key="index" :name="item.nameNum"
          @click.native="toPage(index)">
            <Icon :type="item.icon"></Icon>
            {{ item.title }}
        </MenuItem>
      </Menu>
    </div>
    <div class="login">
      <Button type="text">系统管理员</Button>
      <Button type="text">退出</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1',
      navbarList: [
        {
          title: '组织架构',
          nameNum: '1',
          icon: 'ios-home',
          url: 'zuzhi'
        },
        {
          title: '用户管理',
          nameNum: '2',
          icon: 'ios-people',
          url: 'user'
        },
        {
          title: '营运管理',
          nameNum: '3',
          icon: 'ios-paper',
          url: 'yunying'
        },
        {
          title: '挂帐管理',
          nameNum: '4',
          icon: 'ios-paper',
          url: 'guazhang'
        },
        {
          title: '会员管理',
          nameNum: '5',
          icon: 'ios-paper',
          url: 'member'
        },
        {
          title: '进销存',
          nameNum: '6',
          icon: 'ios-paper',
          url: 'jinxiaocun'
        },
        {
          title: '报表查询',
          nameNum: '7',
          icon: 'ios-paper',
          url: 'baobiao'
        }
      ]
    }
  },
  methods: {
    toPage (index) {
      this.$router.push({ name: this.navbarList[index].url })
    },
    // 当前页刷新后，activeName 状态不变
    activeNameOfList () {
      let path = this.$route.path
      for (let i=0;i<this.navbarList.length;i++) {
        if (path.indexOf(this.navbarList[i].url) !== -1) {
          this.activeName = this.navbarList[i].nameNum
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
.header {
  height: 60px;
  background-color: #fff;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  min-width: 1200px;
  box-shadow: 1px 1px 1px #eeeeee;
  z-index: 1;
}
.header-logo {
  width: 200px;
  display: flex;
  align-items: center;
}
.header-logo > span {
  font-size: 18px;
  color: #495060;
  font-weight: bold;
}
.header-logo > img {
  width: 30px;
  margin-right: 10px;
}
</style>
