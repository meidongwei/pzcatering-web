<template>
  <div>
    <div class="login-wrap">
      <div class="login-content">
        <div class="login-title">
          <h1>品智餐饮管理系统 V2.1.18</h1>
          <h2>2018新春特别版</h2>
        </div>
        <div class="login-panel">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
              <Input size="large" type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input size="large" type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button long type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
          </Form>
        </div>
        <div class="login-footer">
          <p>奥琦玮信息科技（北京）有限公司 | 石家庄品智科技有限公司</p>
          <p>Copyright 2018 品智科技 All Rights Reserved | 服务热线：400-005-3223</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
          user: '',
          password: ''
      },
      ruleInline: {
          user: [
              {
                required: true,
                message: '请输入用户名！',
                trigger: 'blur'
              }
          ],
          password: [
              {
                required: true,
                message: '请输入密码！',
                trigger: 'blur'
              },
              {
                type: 'string',
                min: 6,
                message: '密码长度不能小于6位！',
                trigger: 'blur'
              }
          ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formInline.user === 'admin'
            && this.formInline.password === '123456') {
            this.$Message.success('登录成功!')
            this.$router.push({ name: 'layout' })
          } else {
            this.$Message.error('用户名或密码错误!')
          }
        } else {
          this.$Message.error('登录失败!')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap,
/* .login-title, */
/* .login-footer, */
.login-panel {
  display: flex;
  justify-content: center;
}
.login-wrap {
  height: 100vh;
  background: url('../assets/login_bg.jpg') no-repeat center center;
  background-size: cover;
}
.login-content {
  width: 900px;
  position: relative;
}
.login-panel {
  opacity: .8;
  padding: 50px 0;
}
.login-panel:hover {
  opacity: 1;
}
.login-title {
  padding: 100px 0 60px 0;
  text-align: center;
}
.login-title h1 {
  color: #e9cb61;
  font-size: 40px;
}
.login-title h2 {
  color: #e9cb61;
  font-size: 30px;
}
.login-footer {
  width: 100%;
  padding: 50px 0;
  position: absolute;
  bottom: 0;
  text-align: center;
}
.login-footer p {
  font-size: 14px;
  color: #cfb867;
}
</style>
