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
  },
  info_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: px2dp(10),
    width: px2dp(345)
  },
  info_avatar__title: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  info_content_wrapper: {
    flexDirection: 'column',
    width: px2dp(298),
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: px2dp(1),
    paddingBottom: px2dp(15)
  },
  info_title_flow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: px2dp(14),
    marginTop: px2dp(5)
  },
  info_icon: {
    width: px2dp(48),
    height: px2dp(48)
  },
  info_btn_flow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft: px2dp(14),
    marginTop: px2dp(11),
  },
  info_title_text: {
    color: '#333',
    fontSize: px2dp(14),
    fontWeight: 'bold'
  },
  info_date: {
    fontSize: px2dp(11),
    color: '#9A9FAD'
  },
  info_desc: {
    fontSize: px2dp(11),
    color: '#9A9FAD'
  },
  info_tips: {
    width: px2dp(16),
    height: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: px2dp(8),
    backgroundColor: '#E60012'
  },
  info_tips_text: {
    color: '#fff',
    fontSize: px2dp(10)
  },
  // 消息通知
  user_info_container: {
    flex: 1
  },
  user_info_wrapper: {
    width: px2dp(345),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_info_image: {
    width: px2dp(41),
    height: px2dp(41)
  },
  info_content: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: px2dp(5),
    paddingVertical: px2dp(10),
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: px2dp(1),
    // paddingBottom: px2dp(10),
  },
  info_content_flow: {

  },
  title_text: {
    color: '#333',
    fontSize: px2dp(14),
    fontWeight: 'bold',
    marginBottom: px2dp(10)
  }
})
