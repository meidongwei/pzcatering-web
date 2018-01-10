<template>
  <div class="container">
    <div class="slider">
      <h2 style="padding:15px 0;border-bottom: 1px solid #f5f7f9;text-align:center;">商户总部</h2>
      <Menu>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            商户总部
          </template>
          <MenuItem name="1-1">商户信息</MenuItem>
          <MenuItem name="1-2">品牌管理</MenuItem>
          <MenuItem name="1-3">区域管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            门店
          </template>
          <MenuItem name="2-1">门店类别管理</MenuItem>
          <MenuItem name="2-2">门店管理</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="content">
      <Breadcrumb style="margin: 15px 15px 0 15px;">
          <BreadcrumbItem to="/">组织架构</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">商户总部</BreadcrumbItem>
          <BreadcrumbItem>商户信息</BreadcrumbItem>
      </Breadcrumb>
      <Row>
          <Col span="10">
            <div style="padding: 20px">
                <Card :bordered="false" style="height: 350px;">
                    <p slot="title">商户信息</p>
                    <div style="display:flex;">
                      <div style="display:flex;flex-direction:column;align-items: flex-end;">
                        <h4 style="margin-bottom: 20px">商户编号：</h4>
                        <h4 style="margin-bottom: 20px">商户名称：</h4>
                        <h4 style="margin-bottom: 20px">商户地址：</h4>
                        <h4 style="margin-bottom: 20px">联系人：</h4>
                        <h4 style="margin-bottom: 20px">电话：</h4>
                        <h4 style="margin-bottom: 20px">手机：</h4>
                      </div>
                      <div style="margin-left: 10px;">
                        <h4 style="margin-bottom: 20px">00001</h4>
                        <h4 style="margin-bottom: 20px">石家庄品智科技有限公司</h4>
                        <h4 style="margin-bottom: 20px">石家庄</h4>
                        <h4 style="margin-bottom: 20px">李小明</h4>
                        <h4 style="margin-bottom: 20px">400053223</h4>
                        <h4 style="margin-bottom: 20px">18503119813</h4>
                      </div>
                    </div>
                </Card>
            </div>
          </Col>
          <Col span="10">
            <div style="padding: 20px">
                <Card :bordered="false" style="height: 350px;">
                    <p slot="title">商户主视觉图片</p>
                    <Button style="margin-bottom: 15px;" type="primary">上传图片</Button>
                    <span>格式：支持jpg、png格式；</span>
                    <span>大小：320*150像素；</span>
                    <div style="background: #eeeeee;height: 200px;"></div>
                </Card>
            </div>
          </Col>
      </Row>
      <div class="footer">
        <p>品智餐饮管理系统 版本号V2.2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
}
.slider {
  flex: 0 0 16em;
  background-color: #fff;
}
.content {
  flex: 1;
  position: relative;
  min-width: 1000px;
}
.footer {
  background-color: #fff;
  padding: 15px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
