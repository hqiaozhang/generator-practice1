/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 获取用户列表mock数据
 * @Date: 2018-02-12 11:11:18 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-02-24 13:26:55
  */

export default {
  url: '/user/:list',
  mock: {
    'code': 1,
    'msg': 'success',
    'result|10-15': [
      {
        'id|5-10': 100,
        'detail|30-5': '@cname'
      }
    ]
  }
}
