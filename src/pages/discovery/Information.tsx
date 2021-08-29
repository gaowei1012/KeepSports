import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
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
                  <Text style={styles.information_t_t}>陕西健身体操团队</Text>
                  <Text style={styles.information_t_h}>团号：20210819</Text>
                </View>
              </View>
              <View style={styles.group_top_content_wrapper}>
                <Text style={styles.group_top_content}>
                  <Text style={styles.group_title}>团说明:</Text> 坚持、信念、对健身永不放弃的精神，是我们 团体每个人的信念和最初的坚定，每一
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
