import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, DeviceEventEmitter, Platform, TouchableNativeFeedback } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../../navigation/NavigationUtil'
import { styles } from '../../../styles/view-style/dynamic'
import * as ImagePicker from 'react-native-image-picker'
import { GoBack } from '../../../utils/goBack'
import RootToast from '../../../utils/Toast'

const AddDynamic = (props: any) => {
  const [response, setResponse] = React.useState<any[]>([])
  const [text, setText] = useState<any>(null)
  const [text_num, setTextNum] = useState<number>(0)
  // upload files
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
      const temp = [...response]
      temp.push(value.assets[0])
      setResponse(temp)
    })
  }

  const change_text = (e: any) => {
    setTextNum(Array.from(e).length)
    setText(e)
  }

  // 保存动态
  const submit_upload_file = () => {
    if (response.length > 0) {
      const data: any = {
        title: '测试',
        comment_name: '暂无',
        date: '1分钟前',
        comment: '暂无评论',
        content: text,
        icon_list: [{ icon: response[0].base64 }]
      }
      save_stroage(data)
      setTimeout(() => {
        DeviceEventEmitter.emit('dynamic', { success: true })
        NavigationUtil.goBack(props.navigation)
      }, 100)
    } else {
      RootToast.showToast('请填写内容，并上传图片!')
    }
  }

  // 保存数据
  const save_stroage = async (data: any) => {
    await AsyncStorage.setItem('dynamic', JSON.stringify(data))
  }

  return (
    <SafeAreaView style={styles.add_container}>
      <TopNavigationBar leftButton={GoBack(props, false)} />
      <View style={styles.add_text_dynamic}>
        <TextInput maxLength={248} onChangeText={change_text} style={styles.textinput} multiline={true} keyboardType='default' placeholder='发布动态默认' placeholderTextColor='#999999' />
        <View style={styles.textnum_container}>
          <Text style={styles.textnum}>{text_num}/248</Text>
        </View>
      </View>
      <View style={styles.upload_img_files_wrapper}>
        <View style={styles.upload_img_files_content}>
          {response.map((item: any) => (
            <Image style={styles.upload_img_files} source={{ uri: `data:image/png;base64,${item.base64}` }} />
          ))}
        </View>
        <TouchableOpacity activeOpacity={1} style={styles.p_content_container} onPress={uploadFile}>
          <ImageBackground source={require('../../../assets/pages/establish/pc.png')} style={styles.establish_bg__content_photon}>
            <Image style={styles.establish_bg__content_photon_icon} source={require('../../../assets/pages/establish/c.png')} />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <ImageBackground style={styles.local_wrapper} source={require('../../../assets/pages/dynamic/lc.png')}>
        <Image style={styles.local_icon} source={require('../../../assets/pages/dynamic/l.png')} />
        <Text style={styles.local_text}>西安市</Text>
      </ImageBackground>
      {Platform.OS == 'ios' ? <TouchableOpacity activeOpacity={1} onPress={submit_upload_file} style={styles.btn}>
        <Text style={styles.fabu_text}>发布</Text>
      </TouchableOpacity> : <TouchableNativeFeedback onPress={submit_upload_file} style={styles.btn}>
        <Text style={styles.fabu_text}>发布</Text>
      </TouchableNativeFeedback>}

    </SafeAreaView>
  )
}

export default AddDynamic
