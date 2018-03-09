/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-08 21:23:13 
 * @Description: 雷达图的action
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 11:30:23
 */
import createAction from '@/util/createAction'

// ------------------------------------
// 常量
// ------------------------------------
export const RADAR_CHART_REQUEST = 'RADAR_CHART_REQUEST'
export const RADAR_CHART_SUCCESS = 'RADAR_CHART_SUCCESS'
export const RADAR_CHART_FAILED = 'RADAR_CHART_FAILED'

export const radarChartRequest = createAction(RADAR_CHART_REQUEST)
export const radarChartSuccess = createAction(RADAR_CHART_SUCCESS, 'data')
export const radarChartFailed = createAction(RADAR_CHART_FAILED, 'error')
