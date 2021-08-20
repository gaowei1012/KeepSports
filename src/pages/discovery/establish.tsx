import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'
import { useState } from 'react'

const statusbar = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  barStyle: 'dark-content',
  translucent: true,
  hidden: false
}

const selData = [
  { title: '选择头像', type: 1 },
  { title: '设置密码', type: 2 },
  { title: '确认创建', type: 3 }
]

const Establish = (props: any) => {
  const [type, setType] = useState<number>(1)
  return (
    <View>
      <ImageBackground style={styles.establish_bg__container} source={require('../../assets/pages/establish/bg.png')}>
        <SafeAreaView>
          <TopNavigationBar leftButton={GoBack(props)} title={'创建团'} statusBar={statusbar} />
          <ImageBackground style={styles.establish_bg__top} source={require('../../assets/pages/establish/tbg.png')}>
            {selData.map((c) => (
              <View key={c.type} style={styles.avatar_wrapper}>
                <Image style={styles.avatar_icon} source={`${type == c.type ? require('../../assets/pages/establish/sr.png') : require('../../assets/pages/establish/nr.png')}`} />
                <Text style={styles.avatar_text}>选择头像</Text>
              </View>
            ))}
          </ImageBackground>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground style={styles.establish_bg__content} source={require('../../assets/pages/establish/cbg.png')}>
        <TouchableOpacity>
          <ImageBackground source={require('../../assets/pages/establish/pc.png')} style={styles.establish_bg__content_photon}>
            <Image style={styles.establish_bg__content_photon_icon} source={require('../../assets/pages/establish/c.png')} />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.establish_bg__content_btn}>
          <Text style={styles.establish_bg__content_next_text}>下一步</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Establish
