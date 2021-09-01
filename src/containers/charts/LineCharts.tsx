import React from 'react'
import { View } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { LineChart } from 'react-native-chart-kit'

const KeepLineChart = (props: {data: any}) => {
  return (
    <LineChart
      data={props.data}
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
