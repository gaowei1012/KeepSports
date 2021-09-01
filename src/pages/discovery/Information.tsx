import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'
import { height } from '../../utils/px2dp'
const statusbar = {
  backgroundColor: '#F6F6F6',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const GroupInformation = (props: any) => {
  const {data} =  props.navigation.state.params
  
  return (
    <View style={styles.group_container}>
      <ImageBackground style={styles.establish_bg__container} source={require('../../assets/pages/establish/bg.png')}>
        <SafeAreaView style={{height: height}}>
          <TopNavigationBar leftButton={GoBack(props, true)} title={'团资料'} statusBar={statusbar} />
          <ScrollView>
            <ImageBackground style={styles.information_top_container} source={require('../../assets/pages/discovery/group.png')}>
              <View style={styles.information_avatar_wrapper}>
                <Image style={styles.information_avatar_img} source={require('../../assets/pages/discovery/gr.png')} />
                <View style={styles.information_avatar_name}>
                  <Text style={styles.information_t_t}>{data.title}</Text>
                  <Text style={styles.information_t_h}>团号：{data.bh}</Text>
                </View>
              </View>
              <View style={styles.group_top_content_wrapper}>
                <Text style={styles.group_top_content}>
                  <Text style={styles.group_title}>团说明:</Text> {data.desc}
                  <TouchableOpacity activeOpacity={1}>
                    <Text style={styles.group_more}>查看更多</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground style={styles.group_t_c} source={require('../../assets/pages/discovery/group_t.png')}>
              <View style={styles.group_t_tips}>
                <Text style={styles.group_t_tips_title}>团标签</Text>
                <View style={styles.group_run}>
                  <Text style={styles.group_run_text}>跑步</Text>
                </View>
              </View>
              <View style={styles.group_t_tips}>
                <Text style={styles.group_t_tips_title}>团主</Text>
                <Image style={styles.group_t_tips_img} source={require('../../assets/pages/discovery/gr.png')} />
              </View>
            </ImageBackground>
            <TouchableOpacity activeOpacity={1} style={styles.exit_wrapper}>
              <Text style={styles.exit_text}>退出该团</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default GroupInformation
