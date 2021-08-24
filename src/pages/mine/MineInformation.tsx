/*
 * @Author: 执念
 * @Date: 2021-08-23 12:59:04
 * @LastEditTime: 2021-08-24 16:57:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/mine/MineInformation.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/mine'
import { GoBack } from '../../utils/goBack'
const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const MineInformation = (props: any) => {
  const listArr = [
    {
      id: 0,
      name: '更换头像',
      icon: require('../../assets/pages/mine/avatar.png'),
      status: true,
      arrow_text: '',
      path: '',
    },
    {
      id: 1,
      name: '昵称',
      icon: '',
      arrow_text: '遗失的的美好',
      status: false,
      path: '',
    },
    {
      id: 2,
      name: '性别',
      icon: require('../../assets/pages/mine/list_right.png'),
      arrow_text: '女',
      status: false,
      path: '',
    },
    {
      id: 3,
      name: '出生日期',
      icon: require('../../assets/pages/mine/list_right.png'),
      arrow_text: '1996-08-21',
      status: false,
      path: '',
    },
    {
      id: 4,
      name: '职业',
      icon: require('../../assets/pages/mine/list_right.png'),
      arrow_text: 'UI设计师',
      status: false,
      path: 'CareerChoice',
    }
  ]
  return (
    <SafeAreaView>
      <TopNavigationBar statusBar={statusbar} leftButton={GoBack(props, true)} title='个人资料' />
      <View style={styles.mine_information_container}>
        {listArr.map(item => (
          <TouchableOpacity onPress={() => {
            NavigationUtil.goPage({}, item.path)
          }} style={styles.list_wrapper}>
            <Text style={styles.left_name}>{item.name}</Text>
            <View style={styles.arrow_wrapper}>
              <Text style={styles.arrow_text}>{item.arrow_text}</Text>
              <Image style={item.status ? styles.arrow_avatar_img : styles.arrow_avatar_icon} source={item.icon}/>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default MineInformation
