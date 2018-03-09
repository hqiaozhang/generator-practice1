/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 用于生成action，减少样板代码
 * @Date: 2018-02-08 14:30:54 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-02-12 11:05:02
  */

/**
 * @param {string} type action类型，必选字段
 * @param {object} args 请求参数
 * @return {object} action对象
 */
export default (type, ...argNames) => (...args) => {
  let action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}
