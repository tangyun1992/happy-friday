
<template>
  <div>
    <el-row>
      <el-col :span="18"><img src="/src/img/login.jpg" alt=""></el-col>
      <el-col :span="6">
        <el-form-item label="用户登录"></el-form-item>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="">
            <el-input v-model="form.name" placeholder="账号" prefix-icon="el-icon-mobile-phone"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password"  placeholder="密码" prefix-icon="el-icon-edit-outline"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
