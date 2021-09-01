import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar, DeviceEventEmitter } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'

const statusbar = {
  backgroundColor: '#F6F6F6',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const establishData = [
  {
    lable: '我创建的团',
    title: '陕西健身体操团队',
    jl: 14,
    desc: '坚持、信念、对运动有着永不放弃的执着',
    jb: '高级',
    bh: '2090329839283',
    icon: require('../../assets/pages/discovery/ccc.png')
  },
  {
    lable: '我加入的团',
    title: '武汉健身体操团队',
    jl: 13,
    desc: '坚持、信念、对运动有着永不放弃的执着',
    jb: '初级',
    bh: '120329839283',
    icon: require('../../assets/pages/discovery/ccc.png')
  }
]

const Establish = (props: any) => {
  return (
    <SafeAreaView style={styles.create_establish_container}>
      <TopNavigationBar
        leftButton={GoBack(props, true)}
        title={'我的运动团'}
        rightButton={
          <TouchableOpacity
            activeOpacity={1}
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
        {establishData.map(item => (
          <View style={styles.create_content_wrapper}>
            <View style={styles.create_content_line}>
              <View style={styles.line} />
              <Text style={styles.line_text}>{item.lable}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              DeviceEventEmitter.emit('group', { success: true, data: item })
              NavigationUtil.goPage({ data: item }, 'GroupInformation')
            }} activeOpacity={1}>
              <ImageBackground source={require('../../assets/pages/discovery/cc.png')} style={styles.content_wrapper}>
                <Image style={styles.content_icon} source={item.icon} />
                <View style={styles.content_list_wrapper}>
                  <View style={styles.content_list_top}>
                    <Text>{item.title}</Text>
                    <Text style={styles.content_km}>{item.jl}km</Text>
                  </View>
                  <ImageBackground style={styles.content_gj} source={require('../../assets/pages/discovery/gj.png')}>
                    <Text style={styles.content_text}>{item.jb}</Text>
                  </ImageBackground>
                  <Text style={styles.content_desc}>{item.desc}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Establish
