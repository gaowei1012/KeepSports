/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-18 15:10:30
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-18 17:09:25
 * @Description:
 */
import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import { styles } from '../../styles/view-style/mine'

const Mine = () => {
  // const [] = useState()
  const listArr = [
    {
      id: 0,
      name: '我的动态',
      icon: require('../../assets/pages/mine/dynamic.png')
    },
    {
      id: 1,
      name: '我的活动',
      icon: require('../../assets/pages/mine/activity.png')
    },
    {
      id: 2,
      name: '在线客服',
      icon: require('../../assets/pages/mine/customerService.png')
    },
    {
      id: 3,
      name: '隐私政策',
      icon: require('../../assets/pages/mine/privacyPolicy.png')
    },
    {
      id: 4,
      name: '用户协议',
      icon: require('../../assets/pages/mine/userAgreement.png')
    },
    {
      id: 5,
      name: '注销账号',
      icon: require('../../assets/pages/mine/loginout.png')
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.mine_bg__container} source={require('../../assets/pages/home/home_bg.png')}>
        <View style={styles.info_box}>
          {/* 个人信息 */}
          <View style={styles.information_box}>
            <View style={styles.flex}>
              <View style={styles.avatar_box}>
                <Image style={styles.avatar} source={require('../../assets/pages/mine/avatar.png')} />
              </View>

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

            <ImageBackground style={styles.right_bgc} source={require('../../assets/pages/mine/right_bgc.png')}>
              <Image style={styles.right} source={require('../../assets/pages/mine/right.png')} />
            </ImageBackground>
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

        <View style={styles.list_box}>
          {listArr &&
            listArr.map((item) => {
              return (
                <View style={styles.box} key={item.id}>
                  <View style={styles.list_flex}>
                    <Image style={styles.img} source={item.icon} />
                    <Text style={styles.desc}>{item.name}</Text>
                  </View>
                  <Image style={styles.list_right} source={require('../../assets/pages/mine/list_right.png')} />
                </View>
              )
            })}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Mine
