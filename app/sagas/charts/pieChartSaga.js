/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-09 09:25:20 
 * @Description: 涉及到操作雷达图的saga
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 15:55:15
 */
 
 
import { call, put, take, takeLatest } from 'redux-saga/effects'
import { fetch } from '@/util/request'
import axios from 'axios'

import {
  PIE_CHART_REQUEST,
  pieChartSuccess,
  pieChartFailed } from '@/actions/pieChartAction'

/**
 * @description 使用github API获取用户信息
 * @param {string} startTime 开始时间
 * @param {number} endTime 结束时间
 * @return {promise} 返回结果的Promise
 */
const apifetchPieChart = (startTime, endTime) => {
  console.log('startTime, endTime', startTime, endTime)
  return fetch('fetchPieChart'
    // {startTime: startTime, endTime: endTime}
  )
}

export function* fetchPieChart(action) {
  
 try {
  yield takeLatest(PIE_CHART_REQUEST, fetchPieChart)
   
   const { data } = yield call(apifetchPieChart, action.startTime, action.endTime)
   console.log('mock data', data.result)
   yield put(pieChartSuccess(data.result))
 } catch (error) {
   yield put(pieChartFailed(error.message))
 }
}
 


