import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu

const SiderMenus = ({match}) => {
  
  return (
    <Menu theme='dark' defaultOpenKeys={['sub0']} mode='inline'>
    <Menu.Item key='/'>
      <Link to='/app'>
        <Icon type='home' />
        <span>首页</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key='sub1'
      title={<span><Icon type='area-chart' /><span>D3图表库</span></span>}
    >
      <Menu.Item key='charts/simple-bar-chart'><Link to='/app/charts/simple-bar-chart'>柱状图</Link></Menu.Item>
      <Menu.Item key='charts/radar-linec-hart'><Link to='/app/charts/radar-linec-hart'>雷达图</Link></Menu.Item>
    </SubMenu>
    <SubMenu
      key='sub2'
      title={<span><Icon type='switcher' /><span>表单页</span></span>}
    >
 
      <Menu.Item key='table/base-tables'><Link to='/app/table/base-tables'>基础表格</Link></Menu.Item>
      <Menu.Item key='/asyc-tables'><Link to='/asyc-tables'>分步表单</Link></Menu.Item>
    </SubMenu>
    <SubMenu
      key='sub3'
      title={<span><Icon type='user' /><span>列表页</span></span>}
    >
      <Menu.Item key='/profile'><Link to='/profile'>查询表格</Link></Menu.Item>
      <Menu.Item key='/profile'><Link to='/profile'>标准列表</Link></Menu.Item>
      <Menu.Item key='/profile'><Link to='/profile'>卡片列表</Link></Menu.Item>
      <Menu.Item key='/profile'><Link to='/profile'>搜索列表</Link></Menu.Item>
    </SubMenu>
    <SubMenu
      key='sub4'
      title={<span><Icon type='dot-chart' /><span>详情页</span></span>}
    >
      <Menu.Item key='/simple-math-chart'><Link to='/simple-math-chart'>详情页</Link></Menu.Item>
      <Menu.Item key='/archimedean-spiral-line'><Link to='/archimedean-spiral-line'>基础详情页</Link></Menu.Item>
      <Menu.Item key='/equiangular-spiral-line'><Link to='/equiangular-spiral-line'>高级详情页</Link></Menu.Item>
    </SubMenu>
  </Menu>
  )
}

// SiderMenus.propTypes = {
//   match: PropTypes.object.isRequired,
// }

export default SiderMenus
