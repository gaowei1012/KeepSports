/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-22 10:18:24
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-22 11:07:34
 * @Description: 隐私政策样式
 */

import { StyleSheet } from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },

  box: {
    fontSize: px2dp(14),
    // fontFamily: 'PingFang',
    fontWeight: '400',
    color: '#333',
    paddingLeft: px2dp(15),
    paddingRight: px2dp(17),
    // paddingBottom: px2dp(17)
  },

  desc: {
    fontSize: px2dp(14),
    fontWeight: '400',
    color: '#333',
    paddingBottom: px2dp(17),
    lineHeight: px2dp(20)
  }
})
