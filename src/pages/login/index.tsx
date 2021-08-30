import React, { useState } from 'react'
import { View, TextInput, Platform, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, DeviceEventEmitter } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { IUserPostData } from '../../interface/pages/user'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'
import UserModel from '../../models/user'
import RootToast from '../../utils/Toast'

const Login = (props: any) => {
  const [user, setName] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  // 登录
  const login_submit = () => {
    const data: IUserPostData = {
      username: user,
      password: pwd
    }

    UserModel.login(data)
      .then((res: any) => {
        if (res.data.code == '200') {
          RootToast.showToast('登录成功!')
          save_stroage(res.data.data)
          // 登录成功，返回上一页
          setTimeout(() => {
            NavigationUtil.goBack(props.navigation)
          }, 800)
          DeviceEventEmitter.emit('login', { success: true, user: user, data: JSON.stringify(res.data.data) })
        } else if (res.data.code == '204') {
          RootToast.showToast(res.data.msg)
        } else if (res.data.code == 205) {
          RootToast.showToast(res.data.msg)
        }
      })
      .catch(err => {
        RootToast.showToast(JSON.stringify(err))
        console.log(err)
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

  const hadle_checkbox = (e: any) => {
    console.log('checkbox', e)
    setDisabled(e)
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopNavigationBar leftButton={GoBack(props, true)} title='密码登录' />
        <ImageBackground style={styles.user_bg_container} source={require('../../assets/pages/user/bg.png')}>
          <View style={styles.user_content_container}>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_phone} source={require('../../assets/pages/mine/phone.png')} />
              <TextInput style={{ color: '#333' }} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} onChangeText={handle_user} placeholder='请输入账号' />
            </View>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_pwd} source={require('../../assets/pages/mine/pwd.png')} />
              <TextInput style={{ color: '#333' }} onChangeText={handle_pwd} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} secureTextEntry={true} placeholder='请输入密码' />
            </View>
            <TouchableOpacity disabled={!disabled} activeOpacity={1} style={[!disabled ? styles.no_user_content_btn : styles.user_content_btn]} onPress={login_submit}>
              <Text style={styles.user_content_btn_text}>登录</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user_tk_container}>
            <CheckBox style={styles.checkbox} onValueChange={hadle_checkbox} tintColors={{ true: true }} tintColor='#ddd' />
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

export default Login
