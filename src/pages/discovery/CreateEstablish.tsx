/*
 * @Author: 执念
 * @Date: 2021-08-22 17:02:13
 * @LastEditTime: 2021-08-24 16:58:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/discovery/CreateEstablish.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, Platform } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
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

const CreateEstablish = (props: any) => {
  const [type, setType] = useState<number>(1)
  const [response, setResponse] = React.useState<any>(null)
  // upload file
  const uploadFile = () => {
    const options:any = {
      title: '选择图片',
      customButtons: [{ name: 'fb', title: '关闭' }],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
      //noData: true, // 是否启用base64
    }
    ImagePicker.launchImageLibrary(options, function(response) {
      setResponse(response)
      console.log('response', response)
    })
    // ImagePicker.showImagePicker(options, (response) => {
    //   // 当不选择图片时
    //   if (response.didCancel !== true) {
    //     console.log('图片', response)
    //   }
    // })
  }
  return (
    <View>
      <ImageBackground style={styles.establish_bg__container} source={require('../../assets/pages/establish/bg.png')}>
        <SafeAreaView>
          <TopNavigationBar leftButton={GoBack(props, true)} title={'创建团'} statusBar={statusbar} />
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
        <TouchableOpacity onPress={uploadFile}>
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

export default CreateEstablish
