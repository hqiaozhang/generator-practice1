 

const initialState = {
  data: {},
  startTime: '',
  startTime: ''
}

/**
 * @description 饼图reducers
 * @param {object} state state数据
 * @param {object} action action
 * @return {object} 新的state对象
 */
const pieChartReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'PIE_CHART_SUCCESS':
      return Object.assign({}, state.data, {data: action.data})
    default:
      return state  
  }
}

export default pieChartReducer

 