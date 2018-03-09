/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-09 11:29:48 
 * @Description: 饼图action
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 15:00:19
 */
 
import createAction from '@/util/createAction'

// ------------------------------------
// 常量
// ------------------------------------
export const PIE_CHART_REQUEST = 'PIE_CHART_REQUEST'
export const PIE_CHART_SUCCESS = 'PIE_CHART_SUCCESS'
export const PIE_CHART_FAILED = 'PIE_CHART_FAILED'

export const pieChartRequest = createAction(PIE_CHART_REQUEST, 'startTime', 'endTime')
export const pieChartSuccess = createAction(PIE_CHART_SUCCESS, 'data')
export const pieChartFailed = createAction(PIE_CHART_FAILED, 'error')
