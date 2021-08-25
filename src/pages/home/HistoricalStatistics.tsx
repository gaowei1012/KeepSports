/*
 * @Author: your name
 * @Date: 2021-08-23 20:57:34
 * @LastEditTime: 2021-08-24 16:48:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/home/HistoricalStatistics.tsx
 */
import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import { LineChart } from '../../containers/charts'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/historical'
import { GoBack } from '../../utils/goBack'

const dateData = [
  { id: 1, type: 1, name: '周' },
  { id: 2, type: 2, name: '月' },
  { id: 3, type: 3, name: '年' },
  { id: 4, type: 4, name: '总' }
]

const zhouStatisticsData = [
  {
    icon: require('../../assets/pages/home/lj.png'),
    title: '累计跑量 (公里)',
    time: '0.00'
  },
  {
    icon: require('../../assets/pages/home/ps.png'),
    title: '平均配速',
    time: '0‘.00”'
  },
  {
    icon: require('../../assets/pages/home/zys.png'),
    title: '总用时',
    time: '0:00:00'
  },
  {
    icon: require('../../assets/pages/home/zrl.png'),
    title: '总热量 (千卡)',
    time: '0'
  }
]
const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}
const HistoricalStatistics = (props: any) => {
  const [type, setType] = useState<number>(1)
  return (
    <SafeAreaView>
      <TopNavigationBar statusBar={statusbar} title='历史统计' leftButton={GoBack(props, true)} style={{ backgroundColor: '#fff' }} />
      <View style={styles.container}>
        <View style={styles.history_list_wrapper}>
          {dateData.map((item) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setType(item.type)
              }}
              style={[type !== item.type ? styles.list_btn : styles.no_list_btn, item.type == 1 ? styles.list_btn_a : null, item.type == 4 ? styles.list_btn_b : null]}>
              <Text style={type !== item.type ? styles.list_btn_text : styles.no_list_btn_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <LineChart />
      </View>
      <View style={styles.statistics_wrapper}>
        <View style={styles.statistics_title_wrapper}>
          <View style={styles.list_line} />
          {dateData.map((item) => (
            <>{type == item.type ? <Text style={styles.statistics_title_text}>{`${item.name}总计`}</Text> : null}</>
          ))}
        </View>
        <Text style={styles.statistics_desc}>
          累计跑步<Text style={styles.statistics_desc_c}>8</Text>次
        </Text>
      </View>
      <View>
        {zhouStatisticsData.map((item) => (
          <View style={styles.statistics_content}>
            <View style={styles.statistics_list}>
              <Image style={styles.statistics_icon} source={item.icon} />
              <Text style={styles.statistics_content_title}>{item.title}</Text>
            </View>
            <Text style={styles.statistics_content_r}>{item.time}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default HistoricalStatistics
