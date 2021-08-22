import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import { GoBack } from '../../../utils/goBack'

const DynamicCenter = (props: any) => {
  return (
    <ImageBackground style={styles.center_container} source={require('../../../assets/pages/dynamic/centerw.png')}>
      <SafeAreaView>
        <TopNavigationBar leftButton={GoBack(props, true)} title='个人界面' />
        <ImageBackground style={styles.center_avatar_flow} source={require('../../../assets/pages/dynamic/centert.png')}>
          <View style={styles.center_avatar_top_flow}>
            <Image style={styles.center_avatar_icon} source={require('../../../assets/pages/dynamic/a1.png')} />
            <View style={styles.center_avatar_name_flow}>
              <Text style={styles.center_avatar_name_text}>拯救地球李小姐</Text>
              <Text style={styles.center_avatar_name_desc}>丰和路怡和花园</Text>
            </View>
          </View>
          <View style={styles.center_fans_flow}>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
            </View>
          <View style={styles.center_avatar_tips}>
            <Text style={styles.center_avatar_tips_text}>生命在于运动中延续，健康在健身中加固，好好运动从你我 做起，运动是健康的源泉。</Text>
          </View>
        </ImageBackground>
        <View style={styles.center_content_line_wrapper}>
          <View style={styles.center_line}/>
          <Text style={styles.center_line_text}>运动档案</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default DynamicCenter
