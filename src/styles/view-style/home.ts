/*
 * @Author: 执念
 * @Date: 2021-08-13 21:35:50
 * @LastEditTime: 2021-08-14 22:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/home.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home_bg__container: {
    height: px2dp(249),
  },
  bg_flow__container: {
    width: width,
    height: px2dp(248)
  },
  home_title__container: {
    width: px2dp(345),
    height: px2dp(52),
    marginTop: px2dp(30),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title__avatar: {
    width: px2dp(42),
    height: px2dp(42)
  },
  title__flow: {
    marginLeft: px2dp(10)
  },
  title__name: {
    // fontFamily: 'SourceHanSansCN-Regular',
    fontSize: px2dp(14),
    marginBottom: px2dp(6),
    fontWeight: '600',
    color: '#fff'
  },
  title__desc: {
    // fontFamily: 'SourceHanSansCN-Regular',
    fontSize: px2dp(10),
    fontWeight: '500',
    color: '#fff'
  },
  swipple__flow: {
    width: px2dp(345),
    height: px2dp(153),
    alignSelf: 'center',
    marginTop: px2dp(20)
  },
  swipple_image: {
    width: px2dp(345),
    height: px2dp(153)
  }
})
