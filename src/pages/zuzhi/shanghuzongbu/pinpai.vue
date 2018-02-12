<template>
  <Row>
    <Col span="10" style="width:100%;">
      <div style="padding: 20px;">
        <div style="margin-bottom:10px;width:100%;
          display:flex;justify-content:space-between;">
          <Input v-model="value" style="width:300px;"
            placeholder="品牌名称/编码"></Input>
          <Button type="ghost">添加</Button>
        </div>
        <Table border :columns="columns1" :data="data2"
          stye="width:100%;"></Table>
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
      columns1: [
        {
          title: '序号',
          key: 'brandid'
        },
        {
          title: '品牌编码',
          key: 'brandno'
        },
        {
          title: '品牌名称',
          key: 'brandname'
        },
        {
          title: '所属业态',
          key: 'yetai'
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
          brandid: 1,
          brandno: '1',
          brandname: '品智',
          yetai: '1', // 1中餐 | 2西餐 | 3快餐
          order: 1,
          status: 0 // 0已开通 | 2已停用
        },
        {
          brandid: 2,
          brandno: '2',
          brandname: '品智',
          yetai: '2',
          order: 2,
          status: 0
        },
        {
          brandid: 3,
          brandno: '3',
          brandname: '品智',
          yetai: '3',
          order: 3,
          status: 0
        },
        {
          brandid: 4,
          brandno: '4',
          brandname: '品智',
          yetai: '1',
          order: 4,
          status: 0
        },
        {
          brandid: 5,
          brandno: '5',
          brandname: '品智',
          yetai: '2',
          order: 5,
          status: 2
        }
      ]
    }
  },
  computed: {
    data2 () {
      let arr = JSON.parse(JSON.stringify(this.data1))
      for (let i=0;i<arr.length;i++) {
        if (arr[i].yetai === '1') {
          arr[i].yetai = '中餐'
        } else if (arr[i].yetai === '2') {
          arr[i].yetai = '西餐'
        } else {
          arr[i].yetai = '快餐'
        }
      }
      return arr
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
      // this.$Modal.info({
      //   title: this.data2[index].brandname,
      //   content: `品牌编码：${this.data2[index].brandno}<br>品牌名称：${this.data2[index].brandname}<br>所属业态：${this.data2[index].yetai}`
      // })
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
