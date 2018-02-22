<template>
  <div class="container">
    <div class="slider">
      <h2 class="slider-h2">品牌：<a href="javascript:;">品智中餐</a></h2>
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
        <BreadcrumbItem to="/">会员管理</BreadcrumbItem>
        <BreadcrumbItem to="/">{{ breadCrumbTitle }}</BreadcrumbItem>
        <BreadcrumbItem>{{ breadCrumbTitle1 }}</BreadcrumbItem>
      </Breadcrumb>
      <router-view></router-view>
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
          title: '6.1业务规则管理',
          openName: '1',
          iconType: 'ios-paper',
          list: [
            {
              title: '6.1.1会员等级设置',
              nameNum: '1-1',
              url: 'huiyuandengji'
            },
            {
              title: '6.1.2积分规则设置',
              nameNum: '1-2',
              url: 'jifenguize'
            },
            {
              title: '6.1.3预存规则设置',
              nameNum: '1-3',
              url: 'yucunguize'
            },
            {
              title: '6.1.4消费验证设置',
              nameNum: '1-4',
              url: 'xiaofeiyanzheng'
            },
            {
              title: '6.1.5下载二维码',
              nameNum: '1-5',
              url: 'erweima'
            }
          ]
        },
        {
          title: '6.2会员管理',
          openName: '2',
          iconType: 'ios-people',
          list: [
            {
              title: '6.2.1新增会员',
              nameNum: '2-1',
              url: 'mendianleibie'
            },
            {
              title: '6.2.2会员查询',
              nameNum: '2-2',
              url: 'mendianguanli'
            }
          ]
        },
        {
          title: '6.3会员营销',
          openName: '3',
          iconType: 'ios-people',
          list: [
            {
              title: '6.3.1优惠券管理',
              nameNum: '3-1',
              url: 'mendianleibie'
            }
          ]
        },
        {
          title: '6.4申请实体卡',
          openName: '4',
          iconType: 'ios-people',
          list: [
            {
              title: '6.4.1申请实体卡',
              nameNum: '4-1',
              url: 'mendianleibie'
            }
          ]
        },
        {
          title: '6.5短信账户',
          openName: '5',
          iconType: 'ios-people',
          list: [
            {
              title: '6.5.1短信充值',
              nameNum: '5-1',
              url: 'mendianleibie'
            },
            {
              title: '6.5.2门店余额',
              nameNum: '5-2',
              url: 'mendianleibie'
            }
          ]
        },
        {
          title: '6.6公众号设置',
          openName: '6',
          iconType: 'ios-people',
          list: [
            {
              title: '6.6.1自定义菜单设置',
              nameNum: '6-1',
              url: 'mendianleibie'
            }
          ]
        },
        {
          title: '6.7会员营销报表',
          openName: '7',
          iconType: 'ios-people',
          list: [
            {
              title: '6.7.1会员量统计表',
              nameNum: '7-1',
              url: 'mendianleibie'
            },
            {
              title: '6.7.2消费流水表',
              nameNum: '7-2',
              url: 'mendianleibie'
            },
            {
              title: '6.7.3会员消费统计表',
              nameNum: '7-3',
              url: 'mendianleibie'
            },
            {
              title: '6.7.4充值流水表',
              nameNum: '7-4',
              url: 'mendianleibie'
            },
            {
              title: '6.7.5充值统计表',
              nameNum: '7-5',
              url: 'mendianleibie'
            },
            {
              title: '6.7.6充值应收应付表',
              nameNum: '7-6',
              url: 'mendianleibie'
            },
            {
              title: '6.7.7手工调账流水表',
              nameNum: '7-7',
              url: 'mendianleibie'
            },
            {
              title: '6.7.8积分统计表',
              nameNum: '7-8',
              url: 'mendianleibie'
            },
            {
              title: '6.7.9日消费统计表',
              nameNum: '7-9',
              url: 'mendianleibie'
            },
            {
              title: '6.7.10自定义菜单设置',
              nameNum: '7-10',
              url: 'mendianleibie'
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
