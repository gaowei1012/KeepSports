/*
 * @Author: 执念
 * @Date: 2021-08-11 15:26:52
 * @LastEditTime: 2021-08-17 19:52:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/information/index.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/info'

const Information = () => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar
        title={'聊天'}
        statusBar={statusbar}
        style={{ backgroundColor: '#F7F7F7' }}
        leftButton={
          <TouchableOpacity activeOpacity={1}>
            <Image style={styles.l_clear_icon} resizeMode='cover' source={require('../../assets/pages/info/clear.png')} />
          </TouchableOpacity>
        }
        rightButton={
          <TouchableOpacity activeOpacity={1}>
            <Image style={styles.r_me_icon} resizeMode='cover' source={require('../../assets/pages/info/me.png')} />
          </TouchableOpacity>
        }
      />
      <View style={styles.info_container}>
        <Text>消息</Text>
      </View>
    </SafeAreaView>
  )
}

export default Information
