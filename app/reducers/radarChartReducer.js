const initialState = {
  data: {}
}

/**
 * @description 雷达图reducers
 * @param {object} state state数据
 * @param {object} action action
 * @return {object} 新的state对象
 */
const radarChartReducer = (state = initialState, action) => {
  // 发送请求
  if(action.type === 'RADAR_CHART_SUCCESS') {
    return Object.assign({}, state.data, {
      data: action.data
    })
  }

  // if(action.type === 'RADAR_CHART_FAILED') {
  //   return Object.assign({}, state, {
  //     pending: false
  //   })
  // }
  
  return state
}

export default radarChartReducer
