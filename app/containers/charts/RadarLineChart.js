import React from 'react'
import { Row, Col, Card } from 'antd'
import { radarChartRequest } from '@/actions/radarChartAction'
import D3RadarLineChart from '@/components/charts/D3RadarLineChart'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const mapStateToProps = ({ radarData }) => {
	console.log('data**********', radarData)
	return {
		data: radarData.data
	}
}

@connect(mapStateToProps)
class RadarLineChart extends React.Component {
 
	componentDidMount() {
		this.props.dispatch(radarChartRequest())
		// this.render(nextProps.radarChart)
	}
 
	// componentWillReceiveProps(nextProps) {
	// 	this.render(nextProps.radarChart)
	// }
	render() {
		// 请求数据 dispatch
			console.log('this.props', this.props)
			if(isEmpty(this.props.data)) {
				return null
			}

			return (
				<div className='gutter-example radar-chart-demo'>
					<Row gutter={10}>
						<Col className='gutter-row' md={24}>
							<div className='gutter-box'>
								<Card title='D3 雷达图' bordered={false}>
									<D3RadarLineChart data={this.props.data} />
								</Card>
							</div>
						</Col>
					</Row>             
				</div>
			)
	}
}

export default RadarLineChart