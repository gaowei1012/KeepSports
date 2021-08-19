import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/sports'
import { GoBack } from '../../utils/goBack'

const ydData = [
  {
    desc: '平均配速',
    sum: 0,
    icon: require('../../assets/pages/sports/time.png')
  },
  {
    desc: '用时',
    sum: 0,
    icon: require('../../assets/pages/sports/pb.png')
  },
  {
    desc: '热量',
    sum: 0,
    icon: require('../../assets/pages/sports/rl.png')
  }
]

const Sports = (props: any) => {
  const statusbar = {
    backgroundColor: '#DEF2EA',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar statusBar={statusbar} leftButton={GoBack(props)} style={{ backgroundColor: '#DEF2EA' }} />
      <View style={styles.sports_container}>
        <View style={styles.sports_num_wrapper}>
          <Text style={styles.sports_num}>00.00</Text>
          <Text style={styles.sports_gl}>公里</Text>
        </View>
        <ImageBackground style={styles.sports_bg_container} source={require('../../assets/pages/sports/ydbg.png')}>
          {ydData.map((d) => (
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={d.icon} />
              <Text style={styles.sports_c_sum}>{d.sum}</Text>
              <Text style={styles.desc}>{d.desc}</Text>
            </View>
          ))}
        </ImageBackground>
        <View style={styles.sports_start}>
          <TouchableOpacity>
            <ImageBackground style={styles.sports_c_mb} source={require('../../assets/pages/sports/mb.png')}>
              <Text style={styles.sports_c_mb_text}>设定目标</Text>
              <Image style={styles.sports_mb_i} source={require('../../assets/pages/sports/r.png')} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground style={styles.sports_c_start} source={require('../../assets/pages/sports/start.png')}>
              <Text style={styles.sports_c_start_text}>开始</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Sports
