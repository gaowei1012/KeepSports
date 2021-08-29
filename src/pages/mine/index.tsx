/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-18 15:10:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-24 17:11:14
 * @Description: 我的页面
 */
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { IGetUserInfo } from '../../interface/pages/user'
import { styles } from '../../styles/view-style/mine'
import RootToast from '../../utils/Toast'
import UserModel from '../../models/user'
import LogSuccess from './LogSuccess'
import LogOut from './LogOut'

const Mine = () => {
  const [log_out, setLogOut] = useState<boolean>(false)
  const [log_success, setLogSuccess] = useState<boolean>(false)
  const listArr = [
    {
      id: 0,
      name: '我的动态',
      icon: require('../../assets/pages/mine/dynamic.png'),
      pages: 'Dynamic'
    },
    {
      id: 1,
      name: '我的活动',
      icon: require('../../assets/pages/mine/activity.png'),
      pages: 'Activity'
    },
    {
      id: 2,
      name: '在线客服',
      icon: require('../../assets/pages/mine/customerService.png'),
      pages: 'CustomerService'
    },
    {
      id: 3,
      name: '隐私政策',
      icon: require('../../assets/pages/mine/privacyPolicy.png'),
      pages: 'PrivacyPolicy'
    },
    {
      id: 4,
      name: '用户协议',
      icon: require('../../assets/pages/mine/userAgreement.png'),
      pages: 'UserAgreement'
    },
    {
      id: 5,
      name: '注销账号',
      icon: require('../../assets/pages/mine/loginout.png')
    }
  ]

  useEffect(() => {
    DeviceEventEmitter.addListener('login', (event: any) => {
      console.log('login event==>>', event);
    })

    DeviceEventEmitter.addListener('register', (event: any) => {
      console.log('register event===>>', event)
    })
  }, [])

  useEffect(() => {
    const data: IGetUserInfo = {
      username: '执念'
    }

    async function _getUserInfo() {
      const result: any = await AsyncStorage.getItem('UserInfo')
      console.log('result ==>>>', result.token)
      if (JSON.parse(result) != '{}') {
        UserModel.getUserInfo(data, result.token)
          .then((res: any) => {
            if (res.data.code == 401) {
              RootToast.showToast(res.data.msg)
            }
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
    _getUserInfo()
  }, [])

  const onPress = (e: any) => {
    console.log(e)
    e.name == '注销账号' ? setLogOut(true) : NavigationUtil.goPage({}, e.pages)
  }

  return (
    <View>
      <ImageBackground style={styles.mine_bg__container} source={require('../../assets/pages/home/home_bg.png')}>
        <SafeAreaView>
          <View style={styles.info_box}>
            {/* 个人信息 */}
            <View style={styles.information_box}>
              <View style={styles.flex}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    NavigationUtil.goPage({}, 'MineInformation')
                  }}
                  style={styles.avatar_box}>
                  <Image style={styles.avatar} source={require('../../assets/pages/mine/avatar.png')} />
                </TouchableOpacity>

                <View>
                  <View style={styles.nickname_box}>
                    <Text style={styles.nickname}>打扰一下</Text>
                  </View>
                  <View style={styles.information}>
                    <View style={styles.gender}>
                      <Text style={styles.informationText}>女</Text>
                    </View>
                    <View style={styles.age}>
                      <Text style={styles.informationText}>24</Text>
                    </View>
                    <View style={styles.profession}>
                      <Text style={styles.informationText}>设计师</Text>
                    </View>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'Login')
                }}
              >
                <ImageBackground style={styles.right_bgc} source={require('../../assets/pages/mine/right_bgc.png')}>
                  <Image style={styles.right} source={require('../../assets/pages/mine/right.png')} />
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.sports_box}>
              <View style={styles.sport__left}>
                <Text style={styles.toady_step_num}>120.90公里</Text>
                <Text style={styles.toady_step_desc}>累计运动(公里)</Text>
              </View>
              <View style={styles.sport__right}>
                <Text style={styles.toady_step_num}>325.00</Text>
                <Text style={styles.toady_step_desc}>积分(元)</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>

        <LogOut visible={log_out} setLogOut={setLogOut} setLogSuccess={setLogSuccess} />
        <LogSuccess visible={log_success} setLogSuccess={setLogSuccess} />
      </ImageBackground>
      <ImageBackground style={styles.m_bg} source={require('../../assets/pages/mine/mbg.png')}>
        <View style={styles.list_box}>
          {listArr &&
            listArr.map((item) => (
              <TouchableOpacity activeOpacity={1} onPress={() => onPress(item)}>
                <View style={styles.box} key={item.id}>
                  <View style={styles.list_flex}>
                    <Image style={styles.img} source={item.icon} />
                    <Text style={styles.desc}>{item.name}</Text>
                  </View>
                  <Image style={styles.list_right} source={require('../../assets/pages/mine/list_right.png')} />
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ImageBackground>
    </View>
  )
}

export default Mine
