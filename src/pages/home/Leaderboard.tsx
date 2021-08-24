import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/sports'
import { GoBack } from '../../utils/goBack'
import { ScrollView } from 'react-navigation'
import { height } from '../../utils/px2dp'
const statusbar = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  barStyle: 'dark-content',
  translucent: true,
  hidden: false
}

const Leaderboard = (props: any) => {
  return (
    <View>
      <ImageBackground style={styles.leaderboard_container} source={require('../../assets/pages/sports/phb.png')}>
        <SafeAreaView>
          <TopNavigationBar title='排行榜' statusBar={statusbar} leftButton={GoBack(props, true)}/>
        </SafeAreaView>
        <ImageBackground style={styles.leaderboard_container_bottom} source={require('../../assets/pages/sports/phbb.png')}>
          <Text>内容</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
}

export default Leaderboard
