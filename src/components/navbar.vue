<template>
  <div class="header">
    <div class="header-logo">
      <Button @click="handleShowSlideNav" class="openBtn" type="text"
        style="padding:6px;">
        <Icon type="navicon-round" size="23"></Icon>
      </Button>
      <div>
        <img src="@/assets/logo.png" alt="logo">
        <span>品智餐饮管理系统</span>
      </div>
      <Button @click="handleShowNav" class="openBtn" type="text"
        style="padding:6px;">
        <Icon type="more" size="23"></Icon>
      </Button>
    </div>
    <div class="navbar" :class="isShowNav ?'showNav':'hiddenNav'">
      <Menu mode="horizontal" theme="light" :active-name="activeName">
        <MenuItem v-for="(item, index) in navbarList"
          :key="index" :name="item.nameNum"
          @click.native="toPage(index)">
            <Icon :type="item.icon"></Icon>
            {{ item.title }}
        </MenuItem>
      </Menu>
    </div>
    <div class="login" :class="isShowNav ?'showNav':'hiddenNav'">
      <Button type="text">admin</Button>
      <Button type="text" @click="logout">退出</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowNav: false,
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
          title: '快充',
          nameNum: '5',
          icon: 'ios-paper',
          url: 'kuaichong'
        },
        {
          title: '会员管理',
          nameNum: '6',
          icon: 'ios-paper',
          url: 'member'
        },
        {
          title: '进销存',
          nameNum: '7',
          icon: 'ios-paper',
          url: 'jinxiaocun'
        },
        {
          title: '报表查询',
          nameNum: '8',
          icon: 'ios-paper',
          url: 'baobiao'
        }
      ]
    }
  },
  methods: {
    toPage (index) {
      this.$router.push({ name: this.navbarList[index].url })
      this.isShowNav = !this.isShowNav
    },
    logout () {
      this.$router.push({ name: 'login' })
    },
    // 当前页刷新后，activeName 状态不变
    activeNameOfList () {
      let path = this.$route.path
      for (let i=0;i<this.navbarList.length;i++) {
        if (path.indexOf(this.navbarList[i].url) !== -1) {
          this.activeName = this.navbarList[i].nameNum
        }
      }
    },
    handleShowNav () {
      this.isShowNav = !this.isShowNav
    },
    handleShowSlideNav () {
      this.$bus.emit('handleShowSlideNav')
    }
  },
  mounted () {
    this.activeNameOfList()
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  box-shadow: 1px 1px 1px #eeeeee;
  z-index: 1;
}
.header-logo {
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
}
.openBtn {
  display: none;
}
.header-logo div {
  display: flex;
  align-items: center;
}
.header-logo span {
  font-size: 18px;
  color: #495060;
  font-weight: bold;
}
.header-logo img {
  width: 30px;
  margin-right: 10px;
}
.navbar {
  display: flex;
  justify-content: center;
}
.login {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media (max-width: 1242px) {
  .header {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .header-logo {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .openBtn {
    display: block;
  }
  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 100%;
    border-top: 1px solid #f2f2f2;
  }
  .navbar ul {
    height: 100%;
    width: 100%;
  }
  .navbar li {
    width: 25%;
  }
  .login {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #f2f2f2;
  }
  .showNav {
    display: flex;
  }
  .hiddenNav {
    display: none;
  }
}
@media (max-width: 992px) {
  .navbar li {
    width: 33.3%;
  }
}
@media (max-width: 768px) {
  .navbar li {
    width: 50%;
  }
}
</style>
