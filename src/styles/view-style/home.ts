/*
 * @Author: 执念
 * @Date: 2021-08-13 21:35:50
 * @LastEditTime: 2021-08-16 19:23:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/home.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
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
    marginTop: px2dp(20),
    overflow: 'hidden',
    borderRadius: px2dp(6)
  },
  swipple_image: {
    width: px2dp(345),
    height: px2dp(153)
  },
  home__content_container: {
    marginTop: px2dp(28),
    width: px2dp(345),
    alignSelf: 'center'
  },
  home__container_tab: {
    height: px2dp(40)
  },
  home__sport_container: {
    height: px2dp(185),
  },
  sport__flow: {
    marginTop: px2dp(37),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: px2dp(45),
    paddingRight: px2dp(45),
  },
  sport__left: {
    alignItems: 'center'
  },
  today_step_count: {
    fontWeight: '500',
    color: '#666666',
    fontSize: px2dp(13),
  },
  toady_step_num: {
    fontWeight: '800',
    marginTop: px2dp(15),
    fontSize: px2dp(27),
    color: '#333333'
  },
  sport__right: {
    alignItems: 'center'
  },
  start_exercise: {
    backgroundColor: '#5FC38E',
    alignItems: 'center',
    height: px2dp(38),
    width: px2dp(255),
    alignSelf: 'center',
    marginTop: px2dp(20),
    borderRadius: px2dp(18),
    justifyContent: 'center'
  },
  start_exercise__text: {
    color: '#fff',
    fontSize: px2dp(15),
    fontWeight: 'bold'
  }
})
