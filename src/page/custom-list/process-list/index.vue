
<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" size="mini">
      <el-form-item label="客户名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click=""><i class="el-icon-search my-icon"></i>查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click=""><i class="el-icon-minus my-icon reset"></i>重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change=""
      style="width: 100%">
      <el-table-column label="新增客户" :render-header="renderHeader" @click="add">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <agreement-content :custom-id="props.row.name"></agreement-content>
          </template>
        </el-table-column>
        <el-table-column
          property="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          property="protocolNum"
          label="协议数量">
        </el-table-column>
        <el-table-column
          property="initiator"
          label="发起人">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span @click=""><i class="el-icon-circle-plus-outline my-icon reset"></i>新增协议</span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import agreementContent from './agreementContent'
export default {
  name: 'index',
  components: { agreementContent },
  data () {
    return {
      tableData: []
    }
  },
  props: {},
  watch: {},
  methods: {
    async getData () {
      let res = await this.$http.post('/getProcessList', {})
      this.tableData = res.data.data
      console.log(this.$refs.singleTable)
    },
    add () {},
    // render 事件
    renderHeader (h, {column}) { // h即为cerateElement的简写，具体可看vue官方文档
      return h(
        'div',
        [
          h('i', {
            class: 'el-icon-circle-plus-outline',
            style: 'color:green;font-size:18px;margin-right:5px;'
          }),
          h('span', column.label)
        ]
      )
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
  .my-icon {
    color:rgb(101, 149, 188);
    font-weight: bold;
    margin-right: 5px;
    font-size:16px;
  }
  .reset {
    color: green;
  }

</style>
