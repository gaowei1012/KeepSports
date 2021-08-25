import React from 'react'
import { View, Modal, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/view-style/sports'
import { NavigationUtil } from '../../navigation/NavigationUtil'

const SportSuccess = (props: any) => {
  const { visible, setVisible } = props
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.sports_modal_container}>
        <ImageBackground style={styles.sports_modal_bg} source={require('../../assets/pages/sports/tcbj.png')}>
          <TouchableOpacity activeOpacity={1} onPress={() =>{
            setVisible(false)
            NavigationUtil.goPage({}, 'Leaderboard')
          }} style={styles.sports_modal_top}>
            <Text style={styles.sports_modal_top_text}>恭喜你完成了本次跑步</Text>
            <Image style={styles.sports_modal_jb} source={require('../../assets/pages/sports/jb.png')} />
          </TouchableOpacity>
          <Text style={styles.sports_modal_title}>今日数值</Text>
          <View style={styles.sports_modal_content}>
            <View style={styles.sports_modal_content_t}>
              <Text style={styles.sports_modal_content_t1}>时长</Text>
              <Text style={styles.sports_modal_content_t2}>0分</Text>
            </View>
            <View style={styles.sports_modal_content_t}>
              <Text style={styles.sports_modal_content_t1}>公里</Text>
              <Text style={styles.sports_modal_content_t2}>0km</Text>
            </View>
            <View style={styles.sports_modal_content_t}>
              <Text style={styles.sports_modal_content_t1}>消耗</Text>
              <Text style={styles.sports_modal_content_t2}>0千卡</Text>
            </View>
          </View>
          <ImageBackground style={styles.sports_modal_bottom} source={require('../../assets/pages/sports/btnbg.png')}>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              setVisible(false)
            }} style={styles.sports_modal_bottom_c}>
              <Text style={styles.sports_modal_bottom_t}>确认</Text>
            </TouchableOpacity>
          </ImageBackground>
        </ImageBackground>
      </View>
    </Modal>
  )
}

export default SportSuccess
