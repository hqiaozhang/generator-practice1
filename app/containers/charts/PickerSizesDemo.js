import { Row, Col } from 'antd'
import React from 'react'
import { DatePicker, Radio } from 'antd'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker

export default class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value })
  }

  render() {
    const { size } = this.state
    return (
      <div>
       
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder='Select Month' />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder='Select Week' />
      
      </div>
    )
  }
}