import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Modal, ImageBackground, TouchableOpacity } from 'react-native'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/mine'

const Welcome = (props: { navigation: any }) => {
  const [visible, setVisible] = useState<boolean>(true)
  // 跳转到首页
  // useEffect(() => {
  //   setTimeout(() => {
  //     NavigationUtil.restToHomePage({
  //       navigation: props.navigation
  //     })
  //   }, 2000)
  // }, [])
  return (
    <SafeAreaView>
      <Modal animationType='fade' transparent={true} visible={visible}>
        <View style={styles.logout_container}>
          <ImageBackground style={styles.logout_content_wrapper_c} source={require('../../assets/pages/mine/logout.png')}>
            <Text style={styles.logout_title}>服务协议和隐私政策</Text>
            <Text style={styles.logout_content}>
              请你务必审慎阅读，充分理解“服务协议”和“隐私政策”各条款，以帮助您了解维护自己隐私权的方式我们希望通过本《隐私条款》
              向您说明，在使用我们的服务时以及我们为您提供的访问、更新、控制和保护这些信息方式。你可阅读
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  NavigationUtil.goPage({}, 'UserAgreement')
                }}>
                <Text>《服务协议》</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  NavigationUtil.goPage({}, 'PrivacyPolicy')
                }}>
                <Text>《隐私 政策》</Text>
              </TouchableOpacity>
              了解详细信息。如你同意，请点击“同意”开 始接受我们的服务
            </Text>
            <View style={styles.logout_bottom}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false)
                }}
                style={styles.logout_bottom_l}>
                <Text style={styles.concel}>暂不使用</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  NavigationUtil.restToHomePage({
                    navigation: props.navigation
                  })
                }}
                style={styles.logout_bottom_l}>
                <Text style={styles.commen_c}>同意</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Welcome
