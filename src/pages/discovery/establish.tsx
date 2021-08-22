import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'
import { useState } from 'react'

const statusbar = {
  backgroundColor: '#F6F6F6',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const Establish = (props: any) => {
  return (
    <SafeAreaView style={styles.create_establish_container}>
      <TopNavigationBar
        leftButton={GoBack(props, true)}
        title={'我的运动团'}
        rightButton={
          <TouchableOpacity
            onPress={() => {
              NavigationUtil.goPage({}, 'CreateEstablish')
            }}
            style={styles.create_establish}>
            <Text style={styles.create_text}>创建团</Text>
          </TouchableOpacity>
        }
        statusBar={statusbar}
      />
      <ScrollView>
        <View style={styles.create_content_wrapper}>
          <View style={styles.create_content_line}>
            <View style={styles.line} />
            <Text style={styles.line_text}>我创建的团</Text>
          </View>
          <ImageBackground source={require('../../assets/pages/discovery/cc.png')} style={styles.content_wrapper}>
            <Image style={styles.content_icon} source={require('../../assets/pages/discovery/ccc.png')} />
            <View style={styles.content_list_wrapper}>
              <View style={styles.content_list_top}>
                <Text>陕西健身体操团队</Text>
                <Text style={styles.content_km}>15km</Text>
              </View>
              <ImageBackground style={styles.content_gj} source={require('../../assets/pages/discovery/gj.png')}>
                <Text style={styles.content_text}>高级</Text>
              </ImageBackground>
              <Text style={styles.content_desc}>坚持、信念、对运动有着永不放弃的执着....</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.create_content_wrapper}>
          <View style={styles.create_content_line}>
            <View style={styles.line} />
            <Text style={styles.line_text}>我加入的团</Text>
          </View>
          <ImageBackground source={require('../../assets/pages/discovery/cc.png')} style={styles.content_wrapper}>
            <Image style={styles.content_icon} source={require('../../assets/pages/discovery/ccc.png')} />
            <View style={styles.content_list_wrapper}>
              <View style={styles.content_list_top}>
                <Text>武汉健身体操团队</Text>
                <Text style={styles.content_km}>19km</Text>
              </View>
              <ImageBackground style={styles.content_gj} source={require('../../assets/pages/discovery/gj.png')}>
                <Text style={styles.content_text}>高级</Text>
              </ImageBackground>
              <Text style={styles.content_desc}>坚持、信念、对运动有着永不放弃的执着....</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Establish
