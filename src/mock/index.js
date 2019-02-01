/**
 * @desc
 * @date 2019/1/31 13:36
 */
const Mock = require('mockjs')
//格式： Mock.mock( url, post/get , 返回的数据)
Mock.mock('/user/userInfo', 'get', require('./json/userInfo'))

Mock.mock('/getProcessList', 'post', (req) => {
  return require('./json/processList')
})
