/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-09 11:28:44 
 * @Description: 饼图数据
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 15:30:36
 */
 


export default {
  url: '/charts/pieChart/:startTime/:endTime',
  mock: {
    'code': 1,
    'msg': 'success',
    'result|4-6': [
      {
        'name': '@cname',
        'value|1-1000': 1 
      }
    ]
  }
}