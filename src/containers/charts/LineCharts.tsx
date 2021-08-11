import React from 'react'
import { View } from 'react-native'
import { width } from '../../utils/px2dp'
import { LineChart } from 'react-native-chart-kit'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    }
  ]
}

const KeepLineChart = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={width} // from react-native
        height={220}
        // yAxisLabel='$'
        // yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10
          },
          propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: '#ffa726'
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
