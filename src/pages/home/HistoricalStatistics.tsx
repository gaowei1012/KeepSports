import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import { LineChart } from '../../containers/charts'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/historical'
import { GoBack } from '../../utils/goBack'

const listArr = ['周', '月', '年', '总']
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
  barStyle: 'dark-content'
}
const HistoricalStatistics = (props: any) => {
  return (
    <SafeAreaView>
      <TopNavigationBar statusBar={statusbar} title='历史统计' leftButton={GoBack(props, true)} style={{ backgroundColor: '#fff' }} />
      <View style={styles.container}>
        <View style={styles.history_list_wrapper}>
          {listArr.map((item) => (
            <TouchableOpacity style={styles.list_btn}>
              {/* <ImageBackground style={styles.list_btn} source={require('../../assets/pages/home/zhou.png')}>
                <Text>{item}</Text>
              </ImageBackground> */}
            </TouchableOpacity>
          ))}
        </View>
        <LineChart/>
      </View>
      <View style={styles.statistics_wrapper}>
        <View style={styles.statistics_title_wrapper}>
          <View style={styles.list_line} />
          <Text style={styles.statistics_title_text}>周总计</Text>
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
