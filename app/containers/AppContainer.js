/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 应用程序容器组件主文件
 * @Date: 2018-03-07 14:41:58 
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 18:02:53
  */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import AuthorizedRoute from './authorizedRoute'

// Containers
import UnauthorizedContainer from './login/unauthorizedContainer'
import PrimaryContainer from './primaryContainer'

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.shape({
      asyncReducers: PropTypes.object,
      asyncSagas: PropTypes.object,
      dispatch: PropTypes.func,
      getState: PropTypes.func,
      subscribe: PropTypes.func
    }).isRequired

  }

  /**
   * @description 渲染应用主render方法
   * @returns {document} 页面主框架
   * @memberof AppContainer
   */
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <div>
            <Switch>
              <Route path='/auth' component={UnauthorizedContainer} />
              <AuthorizedRoute path='/app' component={PrimaryContainer} />
              <Redirect to='/auth' />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default AppContainer
