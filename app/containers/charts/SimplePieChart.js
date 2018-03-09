/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-09 11:05:13 
 * @Description: 一个简单的饼图
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-09 15:29:16
 */

import React from 'react'
import { Button } from 'antd'
import { D3SimplePieChart } from '@/components/charts'
import { connect } from 'react-redux'
import { pieChartRequest } from '@/actions/pieChartAction'

const mapStateToProps = ({pieData}) => ({
	data: pieData.data
})

let startTime = 20180309
let endTime = 20180410

@connect(mapStateToProps)
class SimplePieChart extends React.Component {
	constructor(props) {
		super(props)
		// const div = React.createElement('div', {className: '.simple-pie-chart'}, 'Hello World')
		this.chartRef
		this.handleUpdate = this.handleUpdate.bind(this)
	}
 
	componentDidMount() {
		this.props.dispatch(pieChartRequest(startTime, endTime))
		if(this.chartRef != undefined) {
			this.chart = new D3SimplePieChart(this.chartRef)
			this.chart.render(this.props.data)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.chart.render(nextProps.data)
	}

	/**
	 * 更新数据
	 * @param {any} e 
	 */
	handleUpdate(e) {
		startTime++
		endTime++
		this.props.dispatch(pieChartRequest(startTime, endTime))
	}

	render() {  
		return (
			<div className='gutter-example simple-pie-chart' ref={(r) => this.chartRef = r}> 
				<Button className='ant-btn-primary' onClick={this.handleUpdate}>updata chart</Button>  
			</div>
		)
	}
}

export default SimplePieChart