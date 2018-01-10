<template>
  <div class="header">
    <div class="header-logo">
      <img src="@/assets/logo.png" alt="logo">
      <span>品智餐饮管理系统</span>
    </div>
    <div class="navbar">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem v-for="(item, index) in navbarList"
          :key="index" :name="item.nameNum">
          <router-link :to="{ name: item.url }" tag="span">
            <Icon :type="item.icon"></Icon>
            {{ item.title }}
          </router-link>
        </MenuItem>
      </Menu>
    </div>
    <div class="login">
      <Button type="primary">系统管理员</Button>
      <Button type="primary">退出</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbarList: [
        {
          title: '组织架构',
          nameNum: 1,
          icon: 'ios-home',
          url: 'zuzhi'
        },
        {
          title: '用户管理',
          nameNum: 2,
          icon: 'ios-people',
          url: 'zuzhi'
        },
        {
          title: '营运管理',
          nameNum: 3,
          icon: 'ios-paper',
          url: 'zuzhi'
        },
        {
          title: '挂帐管理',
          nameNum: 4,
          icon: 'ios-paper',
          url: 'zuzhi'
        },
        {
          title: '会员管理',
          nameNum: 5,
          icon: 'ios-paper',
          url: 'zuzhi'
        },
        {
          title: '进销存',
          nameNum: 6,
          icon: 'ios-paper',
          url: 'zuzhi'
        },
        {
          title: '报表查询',
          nameNum: 7,
          icon: 'ios-paper',
          url: 'zuzhi'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.header {
  height: 60px;
  background-color: #495060;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  min-width: 1200px;
}
.header-logo {
  width: 200px;
  display: flex;
  align-items: center;
}
.header-logo > span {
  font-size: 18px;
}
.header-logo > img {
  width: 30px;
  margin-right: 10px;
}
</style>
