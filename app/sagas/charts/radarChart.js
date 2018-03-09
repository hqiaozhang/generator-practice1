/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-08 21:21:16 
 * @Description: 雷达图数据
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 13:44:57
 */

export default {
  url: '/charts/radarChart',
  mock: {
    'code': 1,
    'msg': 'success',
    'result|4': [
      {
        'className|+1': ['甲班', '乙班', '丙班', '丁班'],
        'chinese|1-1000': 1,
        'math|1-1000': 1,
        'physics|1-1000': 1,
        'chemistry|1-1000': 1,
        'english|1-1000': 1
      }
    ]
  }
}