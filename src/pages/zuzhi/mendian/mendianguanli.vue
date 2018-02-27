<template>
  <Row>
    <Col span="10" style="width:100%;">
      <div style="padding: 20px;">
        <div style="margin-bottom:10px;width:100%;
          display:flex;justify-content:space-between;">
          <Form ref="formInline" :model="formInline" style="display:flex;height:34px;">
            <FormItem label="门店:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Input v-model="formInline.store" placeholder="门店名称/编号"></Input>
            </FormItem>
            <FormItem label="门店类型:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Select v-model="formInline.storeType" style="width:100px;">
                    <Option :value="Number(0)">全部</Option>
                    <Option :value="Number(1)">商超店</Option>
                    <Option :value="Number(2)">街边店</Option>
                </Select>
            </FormItem>
            <FormItem label="品牌:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Select v-model="formInline.storeBrand" style="width:120px;">
                    <Option value="all">全部</Option>
                    <Option value="pzzc">品智中餐</Option>
                    <Option value="pzkc">品智快餐</Option>
                    <Option value="hdlzc">海底捞正餐</Option>
                    <Option value="hdlkc">海底捞快餐</Option>
                </Select>
            </FormItem>
            <FormItem label="经营模式:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Select v-model="formInline.storeMode" style="width:100px;">
                    <Option :value="Number(0)">全部</Option>
                    <Option :value="Number(1)">直营</Option>
                    <Option :value="Number(2)">加盟</Option>
                </Select>
            </FormItem>
            <FormItem label="区域:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Select v-model="formInline.storeArea" style="width:100px;">
                    <Option value="all">全部</Option>
                    <Option value="shanghai">石家庄</Option>
                    <Option value="beijing">北京</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary">查询</Button>
            </FormItem>
          </Form>
          <Button type="ghost">添加</Button>
        </div>
        <Table border :columns="columns1" :data="data1" width="100%"></Table>
        <div style="margin-top:10px;display:flex;justify-content:flex-end;">
          <Page :total="100" show-elevator></Page>
        </div>
      </div>
    </Col>
  </Row>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        store: '',
        storeType: 0,
        storeBrand: 'all',
        storeMode: 0,
        storeArea: 'all'
      },
      columns1: [
        {
          title: '序号',
          key: 'ognid'
        },
        {
          title: '门店编码',
          key: 'ognno'
        },
        {
          title: '门店全称',
          key: 'ognfullname'
        },
        {
          title: '门店简称',
          key: 'ognname'
        },
        {
          title: '门店类别',
          key: 'ottype'
        },
        {
          title: '所属品牌',
          key: 'brandid'
        },
        {
          title: '经营模式',
          key: 'ogntype'
        },
        {
          title: '所属区域',
          key: 'ognarea'
        },
        {
          title: '联系人',
          key: 'user'
        },
        {
          title: '电话',
          key: 'telephone'
        },
        {
          title: '手机',
          key: 'mobilephone'
        },
        {
          title: '排序',
          key: 'order'
        },
        {
          title: '同步时间',
          key: 'syncTime'
        },
        {
          title: '操作',
          key: 'action',
          width: 130,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: params.row.status === 0 ? 'warning' : 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.changeStatus(params.index)
                  }
                }
              }, params.row.status === 0 ? '停用' : '开通'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '修改')
            ]);
          }
        }
      ],
      data1: [
        {
          ognid: 1,
          ognno: '01',
          ognfullname: '品智中餐二店',
          ognname: '中餐二店',
          ottype: 1,
          brandid: 1,
          ogntype: 1,
          ognarea: '石家庄',
          user: '小白',
          telephone: '86028888',
          mobilephone: '18503118888',
          order: 1,
          syncTime: '18-10',
          status: 0
        }
      ]
    }
  },
  methods: {
    changeStatus (index) {
      if (this.data1[index].status === 0) {
        this.data1[index].status = 2
      } else {
        this.data1[index].status = 0
      }
    },
    show (index) {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: 'Please enter your name...'
            },
            on: {
              input: (val) => {
                this.value = val
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
