/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 涉及到用户相关的action
 * @Date: 2018-02-08 14:14:21 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-02-08 16:36:25
  */
import createAction from '@/util/createAction'
// ------------------------------------
// 常量
// ------------------------------------
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
// ------------------------------------
// Actions
// ------------------------------------
export const loadUserRequest = createAction(LOAD_USER_REQUEST, 'username', 'page')
export const loadUserSuccess = createAction('LOAD_USER_SUCCESS', 'user')
export const loadUserFailed = createAction('LOAD_USER_FAILED', 'error')
