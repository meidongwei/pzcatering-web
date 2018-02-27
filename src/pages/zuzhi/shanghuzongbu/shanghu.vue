<template>
  <Row>
    <Col :lg="12" :md="12" :xs="24">
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
    <Col :lg="12" :md="12" :xs="24">
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
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
