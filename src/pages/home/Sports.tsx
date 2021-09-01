import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native'
import { AnimatedGaugeProgress } from 'react-native-simple-gauge'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/sports'
import { GoBack } from '../../utils/goBack'
import SportSuccess from './SportSuccess'

const statusbar = {
  backgroundColor: '#DEF2EA',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

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
  const [start, setStart] = useState<boolean>(false)
  const [stop, setStop] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [delay, setDelay] = useState<boolean>(false)
  const [lc_num, setLcNum] = useState<number>(0)
  const [calories, setCalories] = useState<number>(0)
  const [pace, setPace] = useState<number>(0)
  const [sportsDataOrg, setSportsDataOrg] = useState<any>({})

  useEffect(() => {
    DeviceEventEmitter.addListener('sports', function (event) {
      if (event.success) {
        setLcNum(event.data)
      }
    })
  }, [])

  // 记录跑步里程
  useEffect(() => {
    let timer: any = null
    if (delay) {
      timer = setTimeout(() => {
        const _lc_num = lc_num + 1
        setLcNum(_lc_num)
      }, 10000)
      return () => clearTimeout(timer)
    } else {
      clearTimeout(timer)
    }
  }, [lc_num, delay])

  // 跑步时长
  useEffect(() => {
    let timer: any = null
    if (delay) {
      timer = setTimeout(() => {
        const counter = count + 1
        setCount(counter)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      clearTimeout(timer)
    }
  }, [count, delay])

  // 运动消耗热量
  useEffect(() => {
    let timer: any = null
    if (delay) {
      timer = setTimeout(() => {
        const _calories = calories + 1
        setCalories(_calories)
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      clearTimeout(timer)
    }
  }, [calories, delay])

  // 平均配速
  useEffect(() => {
    let timer: any = null
    if (delay) {
      timer = setTimeout(() => {
        const _pace = pace + 1
        setPace(_pace)
      }, 8000)
      return () => clearTimeout(timer)
    } else {
      clearTimeout(timer)
    }
  }, [pace, delay])

  // 开始运行
  const sport_start = () => {
    setStart(true)
    setDelay(true)
  }
  // 停止运动
  const sport_stop = () => {
    setStop(true)
    setDelay(false)
  }
  // 目标
  const go_target = () => {
    NavigationUtil.goPage({}, 'TargetDistance')
  }

  // 重置
  const restart_sports = () => {
    setCount(0)
    setLcNum(0)
    setCalories(0)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={`${start ? '跑步进行中' : ''}`} statusBar={statusbar} leftButton={GoBack(props, true)} style={{ backgroundColor: '#DEF2EA' }} />
      <ScrollView>
        <View style={styles.sports_container}>
          <View style={styles.sports_num_wrapper}>
            <Text style={styles.sports_num}>{lc_num}</Text>
            <Text style={styles.sports_gl}>公里</Text>
          </View>
          {start ? (
            <AnimatedGaugeProgress
              style={{
                position: 'absolute',
                alignSelf: 'center'
              }}
              size={290}
              width={10}
              fill={1}
              rotation={91}
              cropDegree={150}
              tintColor='#24C789'
              delay={0}
              backgroundColor='#BDEEDB'
              stroke={[2, 2]} //For a equaly dashed line
              strokeCap='circle'
            />
          ) : null}
          <ImageBackground style={styles.sports_bg_container} source={require('../../assets/pages/sports/ydbg.png')}>
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={require('../../assets/pages/sports/time.png')} />
              <Text style={styles.sports_c_sum}>{pace}</Text>
              <Text style={styles.desc}>平均配速</Text>
            </View>
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={require('../../assets/pages/sports/pb.png')} />
              <Text style={styles.sports_c_sum}>{count}</Text>
              <Text style={styles.desc}>用时</Text>
            </View>
            <View style={styles.sports_c_w}>
              <Image style={styles.sports_c_i} source={require('../../assets/pages/sports/rl.png')} />
              <Text style={styles.sports_c_sum}>{calories}</Text>
              <Text style={styles.desc}>热量</Text>
            </View>
          </ImageBackground>
          <View style={styles.sports_start}>
            <TouchableOpacity activeOpacity={1} onPress={go_target}>
              <ImageBackground style={styles.sports_c_mb} source={require('../../assets/pages/sports/mb.png')}>
                <Text style={styles.sports_c_mb_text}>设定目标</Text>
                <Image style={styles.sports_mb_i} source={require('../../assets/pages/sports/r.png')} />
              </ImageBackground>
            </TouchableOpacity>
            {!stop ? (
              <>
                {!start ? (
                  <TouchableOpacity activeOpacity={1} onPress={sport_start}>
                    <ImageBackground style={styles.sports_c_start} source={require('../../assets/pages/sports/start.png')}>
                      <Text style={styles.sports_c_start_text}>开始</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity activeOpacity={1} onPress={sport_stop}>
                    <ImageBackground style={styles.sports_c_start} source={require('../../assets/pages/sports/end.png')}>
                      <Text style={styles.sports_c_start_text}>暂停</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              </>
            ) : null}
            {stop ? (
              <View style={styles.keep_start_flow}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setStart(false)
                    setStop(false)
                    setVisible(true)
                    setSportsDataOrg({count,lc_num,calories})
                  }}>
                  <ImageBackground style={styles.sports_c_start} source={require('../../assets/pages/sports/zt.png')}>
                    <Text style={styles.sports_c_start_text}>结束</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.start_right_flow}
                  onPress={() => {
                    setStop(false)
                  }}>
                  <ImageBackground style={styles.sports_c_start} source={require('../../assets/pages/sports/jx.png')}>
                    <Text style={styles.sports_c_start_text}>继续</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
      <SportSuccess visible={visible} setVisible={setVisible} sportsDataOrg={sportsDataOrg} restartSports={restart_sports} />
    </SafeAreaView>
  )
}

export default Sports
