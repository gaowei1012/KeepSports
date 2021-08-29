import React, { useState } from 'react'
import { View, TextInput, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, Platform } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { IUserPostData, IGetUserInfo } from '../../interface/pages/user'
import CheckBox from '@react-native-community/checkbox'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'
import UserModel from '../../models/user'

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
      username: '127xxxxxx32'
    }
    UserModel.checkPhone(checkData)
      .then(res => {

        // 手机号码没有注册，进行注册逻辑
        UserModel.register(data)
          .then(res => {
            console.log(res)
            // 登录成功，跳转个人中心页面
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
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
              <TextInput style={{color: '#333'}} onChangeText={handle_user} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} placeholder='请输入账号' />
            </View>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_pwd} source={require('../../assets/pages/mine/pwd.png')} />
              <TextInput style={{color: '#333'}} onChangeText={handle_pwd} placeholderTextColor={Platform.OS == 'ios' ? '' : '#ddd'} secureTextEntry={true} placeholder='请输入密码' />
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
