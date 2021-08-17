/*
 * @Author: 执念
 * @Date: 2021-08-16 22:32:59
 * @LastEditTime: 2021-08-17 19:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/info.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  l_clear_icon: {
    width: px2dp(21),
    height: px2dp(24),
  },
  r_me_icon: {
    width: px2dp(21),
    height: px2dp(24),
  },
  info_container: {
    width: px2dp(345),
    alignSelf: 'center'
  }
})
