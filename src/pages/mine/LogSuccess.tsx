import { View, Modal, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/view-style/mine'

const LogSuccess = (props: { visible: boolean; setLogSuccess: any }) => {
  const { visible, setLogSuccess } = props
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.logout_container}>
        <ImageBackground style={styles.logout_content_wrapper} source={require('../../assets/pages/mine/logout.png')}>
          <View style={styles.logout_success_wrapper}>
            <Image style={styles.logout_success_img} source={require('../../assets/pages/mine/success.png')} />
            <View style={styles.logout_success_text}>
              <Text style={styles.t}>账号注销成功</Text>
              <Text style={styles.l}>感谢您的使用与支持</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => {
            setLogSuccess(false)
          }}>
            <ImageBackground style={styles.logout_btn_fl} source={require('../../assets/pages/mine/btn.png')}>
              <Text style={styles.logout_btn_fl_t}>我知道了</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  )
}

export default LogSuccess
