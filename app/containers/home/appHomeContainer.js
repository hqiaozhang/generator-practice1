import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { logout } from '@/actions/loginAction'
import HomeSide from '@/components/home/homeSide'
import HomeContent from '@/components/home/homeContent'
import SimpleBarChart from '../charts/SimpleBarChart'
import PickerSizesDemo from '../charts/PickerSizesDemo'
import './home.scss'
 
@connect(null)
class AppHomeContainer extends Component {
  // logout = () => {
  //   const { dispatch } = this.props
  //   dispatch(logout())
  // }

  render() {
    const { match } = this.props
    return (
        <HomeContent />
    )
  }
}

export default AppHomeContainer
