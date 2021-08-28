import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import * as ImagePicker from 'react-native-image-picker'
import { GoBack } from '../../../utils/goBack'

const AddDynamic = (props: any) => {
  const [response, setResponse] = React.useState<any[]>([])
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
  return (
    <SafeAreaView style={styles.add_container}>
      <TopNavigationBar leftButton={GoBack(props, false)} />
      <View style={styles.add_text_dynamic}>
        <TextInput style={styles.textinput} multiline={true} placeholder='发布动态默认' placeholderTextColor='#999999' />
        <View style={styles.textnum_container}>
          <Text style={styles.textnum}>0/248</Text>
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
      <TouchableOpacity activeOpacity={1} style={styles.btn}>
        <Text style={styles.fabu_text}>发布</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AddDynamic
