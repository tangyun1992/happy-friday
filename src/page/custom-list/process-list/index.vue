<!--
 * @date 2019/1/31 18:53
 * @desc
 -->

<template>
  <div>
    <el-button @click="">清除日期过滤器</el-button>
    <el-button @click="">清除所有过滤器</el-button>
    <el-table
      border
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column label="新增客户" :render-header="renderHeader" @click="add">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="date"
          label="日期"
          width="120">
        </el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          property="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    props: {},
    watch: {},
    methods: {
      async getData () {
        let res = await this.$http.post('/getProcessList', {})
      },
      add () {},
      // render 事件
      renderHeader (h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
        return h(
          'div',
          [
            h('i', {
              class: 'el-icon-circle-plus-outline',
              style: 'color:green;font-size:18px;margin-right:5px;'
            }),
            h('span', column.label)
          ],
        );
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
