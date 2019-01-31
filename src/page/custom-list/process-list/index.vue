<!--
 * @date 2019/1/31 18:53
 * @desc
 -->

<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
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
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    data () {
      return {}
    },
    props: {},
    watch: {},
    methods: {},
    mounted () {
    }
  }
</script>

<style scoped>

</style>
