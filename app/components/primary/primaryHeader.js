import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd' 

const { Header } = Layout 

const PrimaryHeader = (logout) => (
  <Header className="header clearfix fixed">
    <div className="logo" >LOGO</div>
    <div className="left-menu" style={{float: 'left', width: '50%'}}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="left-menu-2">
          <NavLink to='/app' exact activeClassName='active'>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="left-menu-3">
          <NavLink to='/app/users' activeClassName='active'>Users</NavLink>
        </Menu.Item>
        <Menu.Item key="left-menu-4">
          <NavLink to='/app/products' activeClassName='active'>Products</NavLink>
        </Menu.Item>
        <Menu.Item key="left-menu-5">
        <NavLink to='/app/core' activeClassName='active'>Core</NavLink>
        </Menu.Item>
      </Menu>
    </div>
    <div className="right-menu" style={{float: 'right', width: '30%'}}>
      <button className='ant-btn ant-btn-primary ant-btn-lg'
        onClick={ this.logout }>Logout</button>
    </div>
  </Header>
)

export default PrimaryHeader
