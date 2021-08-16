import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'

const Discovery = () => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView>
      <TopNavigationBar title={'发现'} statusBar={statusbar} style={{ backgroundColor: '#ffffff' }} />
      <View>
        <Text>发现</Text>
      </View>
    </SafeAreaView>
  )
}

export default Discovery
