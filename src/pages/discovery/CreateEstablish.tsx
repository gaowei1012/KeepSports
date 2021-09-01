/*
 * @Author: 执念
 * @Date: 2021-08-22 17:02:13
 * @LastEditTime: 2021-08-24 16:58:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/discovery/CreateEstablish.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, Platform, DeviceEventEmitter } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/establish'
import { GoBack } from '../../utils/goBack'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const statusbar = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const selData = [
  { title: '选择头像', type: 1 },
  { title: '设置密码', type: 2 },
  { title: '确认创建', type: 3 }
]

const CreateEstablish = (props: any) => {
  const [type, setType] = useState<number>(1)
  const [response, setResponse] = React.useState<any>({})
  const [listIconOne, setListIconOne] = useState<boolean>(true)
  const [listIconTwo, setListIconTwo] = useState<boolean>(true)
  const [text_num, setTextNum] = useState<number>(0)
  const [t_name, setTName] = useState<string>('')
  const [t_j_data, setTJData] = useState<string>('')

  // upload file
  const uploadFile = () => {
    const options: any = {
      title: '选择图片',
      customButtons: [{ name: 'fb', title: '关闭' }],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      includeBase64: true
    }
    ImagePicker.launchImageLibrary(options, function (value: any) {
      console.log(value)
      setResponse(value.assets[0])
    })
  }
  return (
    <View>
      <ImageBackground style={styles.establish_bg__container} source={require('../../assets/pages/establish/bg.png')}>
        <SafeAreaView>
          <TopNavigationBar leftButton={GoBack(props, true)} title={'创建团'} statusBar={statusbar} />
          <ImageBackground style={styles.establish_bg__top_wrapper} source={require('../../assets/pages/establish/tbg.png')}>
            <View style={styles.establish_bg__top}>
              {selData.map((c) => (
                <View key={c.type} style={styles.avatar_wrapper}>
                  <ImageBackground style={styles.avatar_icon} source={`${type == c.type ? require('../../assets/pages/establish/sr.png') : require('../../assets/pages/establish/nr.png')}`} >
                    <Text style={[type == c.type ? styles.bz : styles.ac_bz]}>{c.type}</Text>
                  </ImageBackground>
                  <Text style={styles.avatar_text}>{c.title}</Text>
                </View>
              ))}
            </View>
            <Image style={styles.establish_line_left} source={`${listIconOne ? require('../../assets/pages/discovery/line.png') : require('../../assets/pages/discovery/acline.png')}`} />
            <Image style={styles.establish_line_right} source={`${listIconTwo ? require('../../assets/pages/discovery/line.png') : require('../../assets/pages/discovery/acline.png')}`} />
          </ImageBackground>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground style={styles.establish_bg__content} source={require('../../assets/pages/establish/cbg.png')}>
        {type == 1 ? <TouchableOpacity onPress={uploadFile}>
          {console.log(response)}
          {JSON.stringify(response) == '{}' ? <ImageBackground source={require('../../assets/pages/establish/pc.png')} style={styles.establish_bg__content_photon}>
            <Image style={styles.establish_bg__content_photon_icon} source={require('../../assets/pages/establish/c.png')} />
          </ImageBackground> : <Image source={{ uri: `data:image/png;base64,${response.base64}` }} style={styles.establish_bg__content_photon} />}
        </TouchableOpacity> : null}
        {type == 2 ? <View style={styles.t_s_w}>
          <View>
            <Text>团名称</Text>
            <TextInput onChangeText={(e: any) => {
              setTName(e)
            }} maxLength={12} style={styles.textinput} multiline={true} keyboardType='default' placeholder='请输入团名称（12字以内）' placeholderTextColor='#999999' />
          </View>
          <View>
            <Text>团简介</Text>
            <TextInput onChangeText={(e: any) => {
              setTJData(e)
              setTextNum(Array.from(e).length)
            }} maxLength={40} style={styles.textinput_l} multiline={true} keyboardType='default' placeholder='请输入团名称（12字以内）' placeholderTextColor='#999999' />
          </View>
          <Text style={styles.text_num}>{text_num}/40</Text>
        </View> : null}
        {type == 3 ? <View>
          <View style={styles.xz_container}>
            <Text>选择团位置</Text>
            <View style={styles.xz_arrow_w}>
              <Text style={styles.xz_r_text}>陕西省西安市长安区</Text>
              <Image style={styles.arrow} source={require('../../assets/pages/discovery/arrow.png')}/>
            </View>
          </View>
        </View> : null}
        <TouchableOpacity activeOpacity={1} onPress={() => {
          if (type < 3) {
            setType(type + 1)
          }
          console.log(type)
          if (type == 1) {
            setListIconOne(false)
          }
          if (type == 2) {
            setListIconTwo(false)
          }
          if (type == 3) {
            const saveData: any = {
              avatar: response,
              t_name,
              t_j_data,
              address: '陕西省西安市长安区'
            }
            DeviceEventEmitter.emit('tuan', { success: true, data: saveData })
            NavigationUtil.goBack(props.navigation)
          }
        }} style={styles.establish_bg__content_btn}>
          <Text style={styles.establish_bg__content_next_text}>{type !== 3 ? '下一步' : '完成'}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default CreateEstablish
