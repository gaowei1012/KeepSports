import React from 'react'
import { LineChart } from '../../containers/charts'
import { View, Text, SafeAreaView } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>首页</Text>
        <LineChart />
      </View>
    </SafeAreaView>
  )
}

export default Home
