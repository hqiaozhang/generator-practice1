import React, { Component } from 'react'
import { Layout } from 'antd'
import SiderMenus from '../home/siderMenus'
 
export default class primarySide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.onCollapse = (collapsed) => {
      this.setState({ collapsed })
    }
  }
  render() {
    return(
      <div>
        <Layout.Sider 
          width={200} 
          style={{ background: '#333', height: '100%' }}           
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="fixed">
          <SiderMenus />
        </Layout.Sider>
 
      </div>   
    )
  }
} 
