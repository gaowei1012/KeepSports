/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-18 15:29:17
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-18 17:23:06
 * @Description: 我的页面样式
 */

import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },

  mine_bg__container: {
    height: px2dp(248)
  },

  info_box: {
    backgroundColor: '#fff',
    opacity: 0.8,
    marginTop: px2dp(48),
    marginLeft: px2dp(10),
    marginRight: px2dp(10),
    paddingTop: px2dp(19),
    paddingLeft: px2dp(13),
    paddingBottom: px2dp(21),
    borderRadius: px2dp(12)
  },

  information_box: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: px2dp(50)
  },

  flex: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  avatar_box: {
    marginRight: px2dp(15)
  },

  avatar: {
    width: px2dp(65),
    height: px2dp(65)
  },

  nickname_box: {
    marginBottom: px2dp(12)
  },

  nickname: {
    fontSize: px2dp(18),
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#333'
  },

  information: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  informationText: {
    color: '#fff',
    fontSize: px2dp(11),
    fontWeight: '500'
  },

  gender: {
    paddingLeft: px2dp(8),
    paddingRight: px2dp(8),
    paddingTop: px2dp(2),
    paddingBottom: px2dp(3),
    marginRight: px2dp(8),

    backgroundColor: '#FBAB40',
    borderRadius: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center'
  },

  age: {
    paddingLeft: px2dp(8),
    paddingRight: px2dp(8),
    paddingTop: px2dp(2),
    paddingBottom: px2dp(3),
    marginRight: px2dp(8),

    backgroundColor: '#FBAB40',
    borderRadius: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center'
  },

  profession: {
    paddingLeft: px2dp(8),
    paddingRight: px2dp(8),
    paddingTop: px2dp(2),
    paddingBottom: px2dp(3),

    backgroundColor: '#FBAB40',
    borderRadius: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center'
  },

  right_bgc: {
    width: px2dp(38),
    height: px2dp(23),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  right: {
    width: px2dp(8),
    height: px2dp(15)
  },

  sports_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: px2dp(57),
    paddingRight: px2dp(57)
  },

  sport__left: {
    alignItems: 'center'
  },

  toady_step_desc: {
    fontSize: px2dp(12),
    fontWeight: '400',
    color: '#666'
  },

  toady_step_num: {
    fontSize: px2dp(24),
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: px2dp(18)
  },

  sport__right: {
    alignItems: 'center'
  },
  m_bg: {
    width: width,
    marginTop: px2dp(40),
  },
  list_box: {
    marginLeft: px2dp(15),
    marginRight: px2dp(15),
    paddingTop: px2dp(1),
    paddingRight: px2dp(5),
    paddingLeft: px2dp(8),
    paddingBottom: px2dp(16),
    backgroundColor: '#fff'
  },
  list_item_box: {
    backgroundColor: 'red'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: px2dp(15),
    paddingBottom: px2dp(15),
    borderBottomWidth: px2dp(1),
    borderBottomColor: '#EEEFF7'
  },

  list_flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  img: {
    width: px2dp(20),
    height: px2dp(20),
    marginRight: px2dp(11.5)
  },

  desc: {
    fontSize: px2dp(14),
    fontWeight: '400',
    color: '#333333'
  },

  list_right: {
    width: px2dp(6),
    height: px2dp(11)
  },
  // 退出
  logout_container: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .45)'
  },
  logout_content_wrapper: {
    width: px2dp(321),
    height: px2dp(265),
    alignItems: 'center'
  },
  logout_content_wrapper_c: {
    width: px2dp(321),
    height: px2dp(320),
    alignItems: 'center',
    borderRadius: px2dp(8)
  },
  logout_content: {
    marginTop: px2dp(20),
    marginHorizontal: px2dp(18),
    color: '#333333',
    fontSize: px2dp(14),
    lineHeight: px2dp(25),
    fontWeight: 'bold'
  },
  logout_title: {
    marginTop: px2dp(17),
    color: '#333333',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  logout_bottom: {
    width: px2dp(319),
    height: px2dp(52),
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logout_bottom_l: {
    width: px2dp(160),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#F7F7F7',
    borderTopWidth: px2dp(1),
    borderRightWidth: px2dp(1),
    borderRightColor: '#F7F7F7'
  },
  concel: {
    color: '#333333',
    fontSize: px2dp(14),
    fontWeight: 'bold'
  },
  commen: {
    color: '#24C789',
    fontSize: px2dp(14),
    fontWeight: 'bold'
  },
  commen_c: {
    color: '#FFA22C',
    fontSize: px2dp(14),
    fontWeight: 'bold'
  },
  logout_success_wrapper: {
    flexDirection: 'row',
    marginTop: px2dp(71)
  },
  logout_success_text: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: px2dp(13)
  },
  t: {
    color: '#333333',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  l: {
    marginTop: px2dp(11),
    color: '#999999',
    fontSize: px2dp(11)
  },
  logout_success_img: {
    width: px2dp(49),
    height: px2dp(49)
  },
  logout_btn_fl: {
    width: px2dp(168),
    height: px2dp(38),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(81)
  },
  logout_btn_fl_t: {
    color: '#fff',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  // 个人资料
  mine_information_container: {
    width: px2dp(345),
    alignSelf: 'center'
  },
  list_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: px2dp(12),
    marginTop: px2dp(28),
    borderBottomColor: '#EFF0F7',
    borderBottomWidth: px2dp(1)
  },
  arrow_wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrow_avatar_img: {
    width: px2dp(54),
    height: px2dp(54)
  },
  arrow_avatar_icon: {
    width: px2dp(6),
    height: px2dp(11),
    marginLeft: px2dp(13)
  },
  arrow_text: {
    color: '#999999',
    fontSize: px2dp(13),
    fontWeight: 'normal'
  },
  left_name: {
    color: '#333333',
    fontSize: px2dp(14),
    fontWeight: 'bold',
  },
  // 选择职业
  cc_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: px2dp(345),
    alignSelf: 'center',
    marginTop: px2dp(30)
  },
  cc_conter: {
    marginLeft: px2dp(12),
    marginRight: px2dp(12),
    marginBottom: px2dp(22)
  },
  cc_bg: {
    width: px2dp(90),
    height: px2dp(40),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: px2dp(10),
    paddingRight: px2dp(10)
  },
  cc_name: {
    color: '#666666',
    fontSize: px2dp(14)
  },
  cc_btn_wrapper: {
    width: px2dp(344),
    backgroundColor: '#24C789',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: px2dp(39),
    borderRadius: px2dp(39/2)
  },
  sele_text: {
    color: '#FFFFFF',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  }
})
