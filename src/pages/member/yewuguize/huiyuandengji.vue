<template>
  <Row>
    <Col span="10" style="width:100%;">
      <div style="padding: 20px;">
        <div style="margin-bottom:10px;width:100%;
          display:flex;justify-content:space-between;">
          <Form ref="formInline" :model="formInline" style="display:flex;height:34px;">
            <FormItem label="会员等级:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Input v-model="value" placeholder="编码/等级名称"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">查询</Button>
            </FormItem>
          </Form>
          <Button type="ghost">添加</Button>
        </div>
        <Table height="520" border :columns="columns1" :data="data1"></Table>
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
      value: '',
      formInline: {},
      columns1: [
        {
          title: '会员等级',
          key: 'name'
        },
        {
          title: '会员卡样式',
          key: 'cardimgurl',
          render: (h, params) => {
            return h('img',  {
              attrs: {
                src: params.row.cardimgurl,
                style: 'width:100px;padding-top:5px;'
              }
            })
          },
          width: '150'
        },
        {
          title: '获取资格',
          key: 'zige'
        },
        {
          title: '适用门店',
          key: 'ognid'
        },
        {
          title: '会员权益',
          key: 'quanyi'
        },
        {
          title: '操作',
          key: 'action',
          width: 180,
          align: 'center',
          render: (h, params) => {
            return h('div', [
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
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        }
      ],
      data1: [
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/01.png'),
          zige: 1,
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 2,
          name: '铂金会员',
          cardimgurl: require('@/assets/card/02.png'),
          zige: ['2', '6'],
          ognid: 2,
          quanyi: '6'
        },
        {
          mgid: 1,
          name: '钻石会员',
          cardimgurl: require('@/assets/card/03.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/01.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/03.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/02.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/01.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        },
        {
          mgid: 1,
          name: '普通会员',
          cardimgurl: require('@/assets/card/03.png'),
          zige: ['微信关注即为该等级会员'],
          ognid: 1,
          quanyi: '3'
        }
      ]
    }
  },
  methods: {
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
    },
    remove (index) {
      this.data1.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
