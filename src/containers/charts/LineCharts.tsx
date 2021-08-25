import React from 'react'
import { View } from 'react-native'
import { px2dp, width } from '../../utils/px2dp'
import { LineChart } from 'react-native-chart-kit'

const data = {
  labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  datasets: [
    {
      data: [0, 2.0, 4.0, 5.0, 2.0],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ]
  // legend: ['Rainy Days'] // optional
}

const KeepLineChart = () => {
  return (
    <LineChart
      data={data}
      width={px2dp(345)}
      height={220}
      yAxisInterval={1}
      chartConfig={{
        decimalPlaces: 2,
        backgroundGradientFrom: '#fff',
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        // backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(100,100,100, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(100,100,100, ${opacity})`,
        style: {
          borderRadius: 10,
          borderColor: '#D5F4E8'
        },
        propsForDots: {
          r: '2',
          strokeWidth: '2',
          stroke: '#D5F4E8'
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  )
}

export default KeepLineChart
