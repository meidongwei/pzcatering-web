<template>
  <Row>
    <Col span="10" style="width:100%;">
      <div style="padding: 20px;">
        <div style="margin-bottom:10px;width:100%;
          display:flex;justify-content:space-between;">
          <Form ref="formInline" :model="formInline" style="display:flex;height:34px;">
            <FormItem label="门店:" style="display:flex;justify-content:space-between;margin-right:10px;margin-bottom:0;">
                <Input v-model="value" placeholder="门店名称/编号"></Input>
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
      value: '',
      formInline: {},
      columns1: [
        {
          title: '序号',
          key: 'otid'
        },
        {
          title: '类别编码',
          key: 'otno'
        },
        {
          title: '门店类别',
          key: 'otname'
        },
        {
          title: '排序',
          key: 'order'
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
          otid: 1,
          otno: '01',
          otname: '街边店',
          order: 1,
          status: 0
        },
        {
          otid: 2,
          otno: '02',
          otname: '商超店',
          order: 2,
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
    },
    remove (index) {
      this.data1.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
