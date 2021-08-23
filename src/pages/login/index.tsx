import React from 'react'
import { View, TextInput, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'

const Login = (props: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopNavigationBar leftButton={GoBack(props, true)} title='注册' />
        <ImageBackground style={styles.user_bg_container} source={require('../../assets/pages/user/bg.png')}>
          <View style={styles.user_content_container}>
            <View style={styles.user_content_flow}>
              <TextInput placeholder='请输入手机号' />
            </View>
            <View style={styles.user_content_flow}>
              <TextInput placeholder='请输入密码' />
            </View>

            <TouchableOpacity style={styles.user_content_btn} onPress={() => {}}>
              <Text style={styles.user_content_btn_text}>注册</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user_tk_container}>
            <Text>
              <Text style={styles.futk}>已仔细阅读</Text>
              <TouchableOpacity>
                <Text style={styles.fll}>《服务协议》</Text>
              </TouchableOpacity>
              <TouchableOpacity>
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
