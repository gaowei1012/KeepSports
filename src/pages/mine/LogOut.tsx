import React from 'react'
import { View, Modal, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/view-style/mine'

const LogOut = (props: { visible: boolean; setLogOut: any, setLogSuccess: any }) => {
  const { visible, setLogOut, setLogSuccess } = props
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.logout_container}>
        <ImageBackground style={styles.logout_content_wrapper} source={require('../../assets/pages/mine/logout.png')}>
          <Text style={styles.logout_title}>注销账户</Text>
          <Text style={styles.logout_content}>点击确认注销，你的账号及所有内容将被立即 注销，，所有内容无法恢复，再次登录需要创 建一个新的账号，您确定注销此账号吗?</Text>
          <View style={styles.logout_bottom}>
            <TouchableOpacity onPress={() => {
              setLogOut(false)
            }} style={styles.logout_bottom_l}>
              <Text style={styles.concel}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setLogOut(false)
              setTimeout(() => {
                setLogSuccess(true)
              }, 200)
            }} style={styles.logout_bottom_l}>
              <Text style={styles.commen}>确认注销</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  )
}

export default LogOut
