import React, { useState } from 'react'
import { View, TextInput, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import CheckBox from '@react-native-community/checkbox'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'

const Register = (props: any) => {
  const [user, setName] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')

  // 注册
  const register_submit = () => {
    const data: any = {
      username: user,
      password: pwd
    }

    console.log(data)
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
              <TextInput onChangeText={handle_user} placeholder='请输入账号' />
            </View>
            <View style={styles.user_content_flow}>
              <Image style={styles.mine_pwd} source={require('../../assets/pages/mine/pwd.png')} />
              <TextInput onChangeText={handle_pwd} secureTextEntry={true} placeholder='请输入密码' />
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.user_content_btn} onPress={register_submit}>
              <Text style={styles.user_content_btn_text}>注册</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user_tk_container}>
            <CheckBox style={styles.checkbox} tintColors={{true: true}} tintColor='#ddd' disabled={false}/>
            <Text>
              <Text style={styles.futk}>已仔细阅读</Text>
              <TouchableOpacity
                onPress={() => {
                  NavigationUtil.goPage({}, 'UserAgreement')
                }}>
                <Text style={styles.fll}>《服务协议》</Text>
              </TouchableOpacity>
              <TouchableOpacity
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
