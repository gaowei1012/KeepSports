import React from 'react'
import { View } from 'react-native'
import { px2dp, width } from '../../utils/px2dp'
import { LineChart } from 'react-native-chart-kit'

const data = {
  labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  datasets: [
    {
      data: [0, 2.0, 4.0, 6.0, 7.0],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
  // legend: ['Rainy Days'] // optional
}

const KeepLineChart = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={px2dp(345)} // from react-native
        height={230}
        // yAxisLabel='$'
        // yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
            borderColor: '#4BBB71'
          },
          propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: '#4BBB71'
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}

export default KeepLineChart
