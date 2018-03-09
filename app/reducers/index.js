/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import LoggedUserReducer from './loggedUserReducer'
import radarChartReducer from './radarChartReducer'
import pieChartReducer from './pieChartReducer'

/**
 * 主reducers方法，合并各个子reducer
 * @param {object} asyncReducers 
 */
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    loggedUser: LoggedUserReducer,
    radarData: radarChartReducer,
    pieData: pieChartReducer,
    routing: routerReducer,
    ...asyncReducers // 这是什么，做什么用的
  })
}

export default makeRootReducer
