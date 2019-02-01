
<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div>
          <img src="./login.jpg" alt="" class="welcome">
        </div>
      </el-col>
      <el-col :span="6">
        <el-form ref="form" :model="form" status-icon label-width="80px"  class="login">
          <el-form-item label="用户登录"></el-form-item>
          <el-form-item label="">
            <el-input v-model="form.name" placeholder="账号" prefix-icon="el-icon-mobile-phone"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input type="password" v-model="form.password"  placeholder="密码" prefix-icon="el-icon-edit-outline"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
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
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.form.password !== '') {
            this.$refs.form.validateField('password')
          }
          callback();
        }
      }
      return {
        form: {
          name: '',
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      async login () {
        let res = await this.$http.get('/user/userInfo')
        if (res.status === 200) {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          this.$router.push({path: '/home'})
        }
      }
    }
  }
</script>

<style scoped>
.welcome {
  height: 100%;
  width: 100%;
}
  .login {
    border:1px solid #ddd;
    margin: 50px 10px;
  }
</style>
