import React, { useState } from 'react'
import { View, TextInput, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, Platform, DeviceEventEmitter } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { IUserPostData, IGetUserInfo } from '../../interface/pages/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from '@react-native-community/checkbox'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'
import UserModel from '../../models/user'
import RootToast from '../../utils/Toast'

const Register = (props: any) => {
  const [user, setName] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')

  // 注册
  const register_submit = () => {
    const data: IUserPostData = {
      username: user,
      password: pwd
    }

    // 检查手机号是否注册过
    const checkData: IGetUserInfo = {
      username: user
    }

    UserModel.register(data)
      .then((res: any) => {
        if (res.data.code == '200') {
          RootToast.showToast('注册成功!')
          save_stroage(res.data.data)
          setTimeout(() => {
            NavigationUtil.goBack(props.navigation)
          }, 300)
          DeviceEventEmitter.emit('register', { success: true })
        } else if (res.data.code == '204') {
          RootToast.showToast(res.data.msg)
        }
      })
      .catch(err => {
        RootToast.showToast(JSON.stringify(err))
      })
  }

  // 保存token
  const save_stroage = async (args: any) => {
    await AsyncStorage.setItem('UserInfo', JSON.stringify(args))
  }

  const handle_user = (e: any) => {
    setName(e)
  }

  const handle_pwd = (e: any) => {
    setPwd(e)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopNavigationBar leftButton={GoBack(props, true)} title='注册' />
        <ImageBackground style={styles.user_bg_container} source={require('../../assets/pages/user/bg.png')}>
          <View style={styles.user_content_container}>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_phone} source={require('../../assets/pages/mine/phone.png')} />
              <TextInput style={{ color: '#333' }} maxLength={11} keyboardType='numeric' onChangeText={handle_user} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} placeholder='请输入账号' />
            </View>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_pwd} source={require('../../assets/pages/mine/pwd.png')} />
              <TextInput style={{ color: '#333' }} onChangeText={handle_pwd} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} secureTextEntry={true} placeholder='请输入密码' />
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.user_content_btn} onPress={register_submit}>
              <Text style={styles.user_content_btn_text}>注册</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user_tk_container}>
            <CheckBox style={styles.checkbox} tintColors={{ true: true }} tintColor='#ddd' />
            <Text>
              <Text style={styles.futk}>已仔细阅读</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'UserAgreement')
                }}>
                <Text style={styles.fll}>《服务协议》</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'PrivacyPolicy')
                }}>
                <Text style={styles.fll}>《和隐私政策》</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  )
}

export default Register
