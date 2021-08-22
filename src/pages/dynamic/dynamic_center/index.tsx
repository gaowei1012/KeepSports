import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import { GoBack } from '../../../utils/goBack'

const cData = [{ icon: require('../../../assets/pages/dynamic/c1.png') }, { icon: require('../../../assets/pages/dynamic/c2.png') }, { icon: require('../../../assets/pages/dynamic/c3.png') }]

const DynamicCenter = (props: any) => {
  return (
    <ImageBackground style={styles.center_container} source={require('../../../assets/pages/dynamic/centerw.png')}>
      <SafeAreaView style={styles.scrollview}>
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
        <ScrollView style={styles.scrollview}>
          <View style={styles.center_content_line_wrapper}>
            <View style={styles.center_line} />
            <Text style={styles.center_line_text}>运动档案</Text>
          </View>
          <ImageBackground style={styles.center_content_file} source={require('../../../assets/pages/dynamic/file.png')}>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>1007</Text>
              <Text style={styles.file_text}>总共量</Text>
            </View>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>1045</Text>
              <Text style={styles.file_text}>本月里程</Text>
            </View>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>369</Text>
              <Text style={styles.file_text}>总天数</Text>
            </View>
          </ImageBackground>
          <View style={styles.center_content_line_wrapper}>
            <View style={styles.center_line} />
            <Text style={styles.center_line_text}>运动档案</Text>
          </View>
          <View style={styles.center_file_content}>
            <View style={styles.center_file_content_flow}>
              <Text style={styles.file_date}>2021.09</Text>
              <View style={styles.file_content}>
                <Text style={styles.file_content_left}>13</Text>
                <Text style={styles.file_content_right}>无论你是一位初跑者，还是一位资深跑者，跑步 对我们的身心健康有着重大的影响，低血糖患者 可以跑步</Text>
              </View>
              <View style={styles.file_content_img_wrapper}>
                {cData.map((i, idx) => (
                  <Image style={styles.file_content_img} source={i.icon} key={idx} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default DynamicCenter
