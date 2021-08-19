import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/targetdistance'
import { GoBack } from '../../utils/goBack'
const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content'
}

const TargetDistance = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title="设定距离目标" statusBar={statusbar} leftButton={GoBack(props)} style={{ backgroundColor: '#fff' }} />
      <View>
        <Text>目标距离</Text>
      </View>
    </SafeAreaView>
  )
}

export default TargetDistance
