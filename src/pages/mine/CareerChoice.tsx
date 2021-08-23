import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/mine'
import { GoBack } from '../../utils/goBack'

const CareerChoice = (props: any) => {
  const [type, setType] = useState<number>(1)
  const careerChoice = [
    {
      name: 'UI设计',
      type: 1
    },
    {
      name: '平面设计',
      type: 2
    },
    {
      name: '图标设计',
      type: 3
    },
    {
      name: '代办/经纪人',
      type: 4
    },
    {
      name: '企业采购',
      type: 5
    },
    {
      name: '软件测试',
      type: 6
    },
    {
      name: '产品经理',
      type: 7
    },
    {
      name: '网页设计',
      type: 8
    },
    {
      name: '移动设计',
      type: 9
    },
    {
      name: '个人家庭',
      type: 10
    }
  ]
  const selectTab = (type: number) => {
    setType(type)
  }
  return (
    <SafeAreaView>
      <TopNavigationBar leftButton={GoBack(props, true)} title='选择职业' />
      <View style={styles.cc_wrapper}>
        {careerChoice.map((item) => (
          <TouchableOpacity style={styles.cc_conter} onPress={() => selectTab(item.type)}>
            <ImageBackground style={styles.cc_bg} source={type == item.type ? `${require('../../assets/pages/mine/c1.png')}` : `${require('../../assets/pages/mine/c2.png')}`}>
              <Text style={styles.cc_name}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.cc_btn_wrapper}>
          <Text style={styles.sele_text}>选择职业</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CareerChoice
