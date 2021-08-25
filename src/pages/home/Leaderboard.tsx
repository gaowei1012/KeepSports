import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/sports'
import { GoBack } from '../../utils/goBack'
import { ScrollView } from 'react-navigation'
import { height } from '../../utils/px2dp'
const statusbar = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  barStyle: 'dark-content',
  translucent: true,
  hidden: true
}
const phData = [
  {
    icon: require('../../assets/pages/sports/ph1.png'),
    pm: 5,
    name: '马跳跳',
    distance: 32
  },
  {
    icon: require('../../assets/pages/sports/ph2.png'),
    pm: 5,
    name: '橘子汽水',
    distance: 3
  },
  {
    icon: require('../../assets/pages/sports/ph3.png'),
    pm: 5,
    name: '养乐多',
    distance: 2
  },
  {
    icon: require('../../assets/pages/sports/ph3.png'),
    pm: 5,
    name: '哈哈哈',
    distance: 1
  }
]
const pmData = [
  {
    av: require('../../assets/pages/sports/av2.png'),
    n: require('../../assets/pages/sports/n2.png'),
    h: require('../../assets/pages/sports/h2.png'),
    num: 2,
    id: 1
  },
  {
    av: require('../../assets/pages/sports/av3.png'),
    n: require('../../assets/pages/sports/n1.png'),
    h: require('../../assets/pages/sports/h1.png'),
    num: 1,
    id: 2
  },
  {
    av: require('../../assets/pages/sports/av3.png'),
    n: require('../../assets/pages/sports/n3.png'),
    h: require('../../assets/pages/sports/h3.png'),
    num: 3,
    id: 3
  }
]
const dateData = [
  { id: 1, type: 1, name: '周' },
  { id: 2, type: 2, name: '月' },
  { id: 3, type: 3, name: '年' }
]

const Leaderboard = (props: any) => {
  const [type, setType] = useState<number>(1)
  return (
    <View>
      <ImageBackground style={styles.leaderboard_container} source={require('../../assets/pages/sports/phb.png')}>
        <SafeAreaView>
          <TopNavigationBar title='排行榜' statusBar={statusbar} leftButton={GoBack(props, true)} />
        </SafeAreaView>
        <View style={styles.top_switch_wrapper}>
          {dateData.map((item) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setType(item.type)
              }}
              style={[type == item.type ? styles.tab_btn : styles.no_tab_btn, item.type == 1 ? styles.tab_btn_a : null, item.type == 3 ? styles.tab_btn_c : null]}>
              <Text style={[type == item.type ? styles.tab_btn_text : styles.no_tab_btn_text]}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.top_wrapper}>
          {pmData.map((item) => (
            <View style={styles.top_icon_wrapper} key={item.id}>
              <Image style={item.id == 2 ? styles.top_h_icon_bj : styles.top_h_icon} source={item.h} />
              <Image style={item.id == 2 ? styles.top_av_icon_bj : styles.top_av_icon} source={item.av} />
              <ImageBackground style={item.id == 2 ? styles.top_b_icon_bj : styles.top_b_icon} source={item.n}>
                <Text>NO.{item.num}</Text>
              </ImageBackground>
            </View>
          ))}
        </View>
        <ImageBackground style={styles.leaderboard_container_bottom} source={require('../../assets/pages/sports/phbb.png')}>
          <ScrollView>
            <View style={styles.leaderboard_content}>
              {phData.map((item) => (
                <View style={styles.leaderboard_wrapper}>
                  <View style={styles.left_flow}>
                    <Text style={styles.left_pm}>NO.{item.pm}</Text>
                    <Image source={item.icon} style={styles.left_avatar} />
                    <Text style={styles.left_name}>{item.name}</Text>
                  </View>
                  <View style={styles.right_flow}>
                    <Text style={styles.distance_num}>{item.distance}</Text>
                    <Text style={styles.distance_text}>公里</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
}

export default Leaderboard
