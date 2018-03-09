/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 登录测试页面
 * @Date: 2018-03-07 14:43:06 
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 18:06:15
  */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '@/actions/loginAction'
import './login.scss'

@connect(null)
class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',  // 当前输入的用户名
      password: '',  // 当前输入的密码
      requesting: false // 当前是否正在请求服务端接口
    }
  }

  render() {
    return (
      // // 整个组件被一个id='loginDIV'的div包围, 样式都设置到这个div中
      <div id='loginDIV'>
        <div className='login'>
          <form >
            <input className='login-input' type='text' value={this.state.username}
              placeholder='用户名' required='required'/>
            <input className='login-input' type='password' value={this.state.password}
              placeholder='密码' required='required'/>
            <button className='btn btn-primary btn-block btn-large'
                type='submit' disabled={this.state.requesting}>
              登录
            </button>
          </form>
        </div>
      </div>
    )
  }
}
// 
export default LoginPage
