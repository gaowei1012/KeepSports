/*
 * @Author: your name
 * @Date: 2021-08-19 15:31:52
 * @LastEditTime: 2021-08-24 16:50:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/home/TargetDistance.tsx
 */
import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, DeviceEventEmitter } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/targetdistance'
import { GoBack } from '../../utils/goBack'
const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const jldata = [
  { sum: 1.0, type: 1, c: '' },
  { sum: 2.0, type: 2, c: '' },
  { sum: 3.0, type: 3, c: '' },
  { sum: 5.0, type: 4, c: '' },
  { sum: 8.0, type: 5, c: '' },
  { sum: 10.0, type: 6, c: '' },
  { sum: 12.0, type: 7, c: '' },
  { sum: 21.0975, type: 8, c: '半马' },
  { sum: 42.195, type: 9, c: '全马' }
]

const TargetDistance = (props: any) => {
  const [default_type, setDefaultType] = useState<number>(1)
  const [edit, setEdit] = useState<boolean>(false)
  const [lc_num, setLcNum] = useState<number>(0.9)

  const switchTab = (sum: number, type: number) => {
    setDefaultType(type)
    setLcNum(sum)
  }

  const handle_lc_num = (e: any) => {
    if (parseInt(e)!= NaN) {
      setLcNum(parseInt(e))
    }
  }

  //选择编辑保存
  const click_save = () => {
    NavigationUtil.goBack(props.navigation)
    DeviceEventEmitter.emit('sports', { success: true, data: lc_num })
  }
  const edit_click_save = () => {
    setEdit(false)
    NavigationUtil.goBack(props.navigation)
    DeviceEventEmitter.emit('sports', { success: true, data: lc_num })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar
        title={`${edit ? '自定义距离' : '设定距离目标'}`}
        statusBar={statusbar}
        leftButton={GoBack(props, true)}
        style={{ backgroundColor: '#fff' }}
        rightButton={
          <View>
            {edit ? (
              <TouchableOpacity
                onPress={edit_click_save}>
                <Text>确认</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        }
      />
      <View style={styles.content}>
        <View style={styles.target_top_jl}>
          {edit ? (
            <TextInput keyboardType='numeric' onChangeText={handle_lc_num} style={styles.textinput} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setEdit(true)
              }}>
              <Text style={styles.target_top_sum}>{lc_num}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.target_top_text}>距离步行公里</Text>
        </View>
        <View style={styles.target_content}>
          {jldata.map((j) => (
            <TouchableOpacity activeOpacity={1} onPress={() => switchTab(j.sum, j.type)}>
              <ImageBackground source={`${default_type !== j.type ? require('../../assets/pages/sports/nxz.png') : require('../../assets/pages/sports/xz.png')}`} style={styles.target_content_bg}>
                {j.sum > 20 ? (
                  <ImageBackground style={styles.tl} source={require('../../assets/pages/sports/tl.png')}>
                    <Text style={styles.c}>{j.c}</Text>
                  </ImageBackground>
                ) : null}
                <Text style={[default_type !== j.type ? styles.target_sum_text : styles.ac_target_sum_text]}>{j.sum}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
        {!edit ? (
          <TouchableOpacity style={styles.target_c} onPress={click_save}>
            <Text style={styles.target_c_text}>确定</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  )
}

export default TargetDistance
