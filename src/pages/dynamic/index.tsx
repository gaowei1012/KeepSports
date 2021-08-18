import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/dynamic'

const Dynamic = () => {
  const statusbar = {
    backgroundColor: '#FAFAFA',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={'动态'} statusBar={statusbar} style={{ backgroundColor: '#FAFAFA' }} />
      <View>
        <Text>动态</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dynamic
