import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'

const statusbar = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  barStyle: 'dark-content',
  translucent: true,
  hidden: false
}

const Establish = (props: any) => {
  return (
    <ImageBackground style={styles.establish_bg__container} source={require('../../assets/pages/establish/bg.png')}>
      <SafeAreaView >
        <TopNavigationBar leftButton={GoBack(props)} title={'创建团'} statusBar={statusbar} />
        <ScrollView>
          <Text>创建团</Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Establish
