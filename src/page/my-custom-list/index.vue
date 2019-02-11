<!--
 * @author
 * @date 2019-02-11 20:02
 * @desc
 -->

<template>
  <div>
    <el-form :inline="true" size="mini">
      <el-form-item label="客户名称:">
        <el-input v-model="params.customName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getData">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border stripe width="100%">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column width="40">
        <template slot-scope="scope">
          <i class="el-icon-plus"></i>
        </template>
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="客户名称" prop="name"></el-table-column>
      <el-table-column label="协议数量" prop="protocolNum"></el-table-column>
      <el-table-column label="发起人" prop="initiator"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon-plus"></i>
          <el-button size="small" type="text">新增协议</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination width="100%"
      layout="prev, pager, next"
      :total="50"
    @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
      tableData: [],
      params: {
        customName: '',
        current: 1
      }
    }
  },
  props: {},
  watch: {},
  methods: {
    pageChange (current) {
      this.params.current = current
      this.getData()
    },
    async getData () {
      let res = await this.$http.post('/getProcessList', this.params)
      if (res.data.result === 'success') {
        this.tableData = res.data.data
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="less">
.el-icon-plus{
  color: lightblue;
}
</style>
