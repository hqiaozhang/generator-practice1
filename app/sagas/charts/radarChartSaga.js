/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-09 09:25:20 
 * @Description: 涉及到操作雷达图的saga
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 13:44:05
 */
 
 
 import { call, put, take, takeLatest } from 'redux-saga/effects'
 import { fetch } from '@/util/request'
 import axios from 'axios'
 
 import {
   RADAR_CHART_REQUEST,
   radarChartSuccess,
   radarChartFailed } from '@/actions/radarchartAction'
 
 /**
  * @description 使用github API获取用户信息
  * @param {string} username 用户名
  * @param {number} page 当前页数
  * @return {promise} 返回结果的Promise
  */
 const apifetchRadarChart = () => {
   return fetch('fetchRadarChart')
 }

 export function* fetchRadarChart(action) {
  try {
    yield takeLatest(RADAR_CHART_REQUEST, fetchRadarChart)
    const { data } = yield call(apifetchRadarChart)
    yield put(radarChartSuccess(data.result))
  } catch (error) {
    yield put(radarChartFailed(error.message))
  }
}

 
 
 