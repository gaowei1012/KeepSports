import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'


const Information = () => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView>
      <TopNavigationBar title={'聊天'} statusBar={statusbar} style={{ backgroundColor: '#ffffff' }} />
      <View>
        <Text>消息</Text>
      </View>
    </SafeAreaView>
  )
}

export default Information
