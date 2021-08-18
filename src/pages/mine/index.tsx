/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-18 15:10:30
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-18 16:48:02
 * @Description:
 */
import React from 'react'
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native'
import { styles } from '../../styles/view-style/mine'

const Mine = () => {
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Mine
