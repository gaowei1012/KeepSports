import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
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

const ydDataStart = [
  {
    desc: '平均配速',
    sum: '19‘20‘‘',
    icon: require('../../assets/pages/sports/time.png')
  },
  {
    desc: '用时',
    sum: '16:20',
    icon: require('../../assets/pages/sports/pb.png')
  },
  {
    desc: '热量',
    sum: '180',
    icon: require('../../assets/pages/sports/rl.png')
  }
]

const Sports = (props: any) => {
  const statusbar = {
    backgroundColor: '#DEF2EA',
    barStyle: 'dark-content'
  }
  const [start, setStart] = useState<boolean>(false)
  // 开始运行
  const sport_start = () => {
    setStart(!start)
  }
  // 目标
  const go_target = () => {
    NavigationUtil.goPage({}, 'TargetDistance')
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar statusBar={statusbar} leftButton={GoBack(props)} style={{ backgroundColor: '#DEF2EA' }} />
      <View style={styles.sports_container}>
        <View style={styles.sports_num_wrapper}>
          <Text style={styles.sports_num}>{!start ? '00.00' : '10.26'}</Text>
          <Text style={styles.sports_gl}>公里</Text>
        </View>
        <ImageBackground style={styles.sports_bg_container} source={require('../../assets/pages/sports/ydbg.png')}>
          {!start ? ydData.map((d) => (
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={d.icon} />
              <Text style={styles.sports_c_sum}>{d.sum}</Text>
              <Text style={styles.desc}>{d.desc}</Text>
            </View>
          )) : ydDataStart.map((d) => (
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={d.icon} />
              <Text style={styles.sports_c_sum}>{d.sum}</Text>
              <Text style={styles.desc}>{d.desc}</Text>
            </View>
          ))}
        </ImageBackground>
        <View style={styles.sports_start}>
          <TouchableOpacity activeOpacity={1} onPress={go_target}>
            <ImageBackground style={styles.sports_c_mb} source={require('../../assets/pages/sports/mb.png')}>
              <Text style={styles.sports_c_mb_text}>设定目标</Text>
              <Image style={styles.sports_mb_i} source={require('../../assets/pages/sports/r.png')} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={sport_start}>
            <ImageBackground style={styles.sports_c_start} source={`${!start ? require('../../assets/pages/sports/start.png') : require('../../assets/pages/sports/end.png')}`}>
              <Text style={styles.sports_c_start_text}>{`${!start ? '开始' : '暂停'}`}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Sports
