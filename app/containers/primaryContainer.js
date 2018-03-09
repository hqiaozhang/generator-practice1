/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 主布局页面
 * @Date: 2018-03-07 14:58:35 
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 14:10:45
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import PromaryHeader from '@/components/primary/primaryHeader'
import PrimarySide from '@/components/primary/primarySide'
import AppHomeContainer from './home/appHomeContainer'

// 图表
import SimplePieChart from './charts/SimplePieChart'
// import RadarLineChart from './charts/RadarLineChart'
import BaseTables from './table/BaseTables'

// Sub Container
import UserSubContainer from './users/userSubContainer'
import ProductSubContainer from './product/productSubContainer'
import CoreContainer from './core/core'

@connect(null)
export default class PrimaryHeaderContainer extends Component {
  render() {
   
    const { match } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <PromaryHeader />  
        <Layout>
        <PrimarySide />
          <Switch>
            <Route path={`${match.path}`} exact component={AppHomeContainer} />
            <Route path={`${match.path}/charts/simple-bar-chart`} component={SimplePieChart} />
            {/* <Route path={`${match.path}/charts/radar-linec-hart`} component={RadarLineChart} /> */}
            <Route path={`${match.path}/table/base-table`} component={BaseTables} />
            <Route path={`${match.path}/users`} component={UserSubContainer} />
            <Route path={`${match.path}/products`} component={ProductSubContainer} />
            <Route path={`${match.path}/core`} component={CoreContainer} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </Layout>
      </Layout>
    )
  }
}
