import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUserRequest } from '@/actions/userAction'

// 引入样式文件
import './core.scss'

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const mapStateToProps = ({ loggedUser }) => ({
    user: loggedUser.user
});

/**
 * @description 展示从github加载用户的组件
 * @export {CoreContainer}
 * @class CoreContainer
 * @extends {Component}
 */
@connect(mapStateToProps)
export default class CoreContainer extends Component {

  /**
   * @description 点击按钮，获取github对应的用户
   * @memberof CoreContainer
   */
  handleUser = () => {
    this.props.dispatch(loadUserRequest('baizn', 1))
  }

  /**
   * @description 渲染用户信息组件
   * @returns  {document} jsx片段，用户信息
   * @memberof CoreContainer
   */
  render() {
    return (
      <div className="sunrise core-layout">
        <div className={`app-layout package`}>
          core,{ this.props.user ? JSON.stringify(this.props.user) : 'none' }
          <button onClick={ this.handleUser }>加载Github用户</button>
        </div>
      </div>
    )
  }
}
