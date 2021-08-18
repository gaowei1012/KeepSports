/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-18 15:29:17
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-18 17:00:26
 * @Description: 我的页面样式
 */

import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
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


  bg_flow__container: {
    width: width,
    height: px2dp(248)
  },
  mine_title__container: {
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
  mine__content_container: {
    marginTop: px2dp(28),
    width: px2dp(345),
    alignSelf: 'center'
  },
  mine__container_tab: {
    height: px2dp(40)
  },
  mine__sport_container: {
    height: px2dp(185)
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
  },
  mine_leaderboard__container: {
    width: px2dp(345),
    alignSelf: 'center',
    flexDirection: 'row'
  },
  leaderboard__image__bg: {
    width: px2dp(115),
    height: px2dp(122),
    alignItems: 'center'
  },
  l_icon__bg: {
    marginTop: px2dp(13),
    width: px2dp(37),
    height: px2dp(47),
    alignItems: 'center',
    justifyContent: 'center'
  },
  l_icon_min: {
    marginTop: px2dp(6),
    width: px2dp(18),
    height: px2dp(15)
  },
  p_num: {
    color: '#333',
    fontSize: px2dp(20),
    fontWeight: 'bold',
    marginTop: px2dp(3)
  },
  p_text: {
    color: '#666',
    fontSize: px2dp(12)
  },
  line: {
    height: px2dp(10),
    marginVertical: px2dp(1)
  },
  history_data_container: {
    width: px2dp(345),
    alignSelf: 'center'
  },
  history_data_bg: {
    height: px2dp(296)
  },
  city__container: {
    backgroundColor: '#fff',
    width: width,
    alignSelf: 'center',
    borderTopRightRadius: px2dp(10),
    borderTopLeftRadius: px2dp(10),
    paddingBottom: px2dp(20)
  },
  city__top_title: {
    marginLeft: px2dp(22),
    marginTop: px2dp(19.5),
    marginRight: px2dp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  city_top_text: {
    color: '#333',
    fontSize: px2dp(18),
    fontWeight: 'bold'
  },
  city_sle: {
    width: px2dp(49),
    height: px2dp(26),
    marginTop: px2dp(8),
    marginLeft: px2dp(4)
  },
  arrow_container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrow_text: {
    color: '#666'
  },
  arrow: {
    // width: '100%',
    // height: '100%'
  },
  city_content_container: {
    alignSelf: 'center',
    width: px2dp(345),
    marginTop: px2dp(21.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: px2dp(1),
    paddingBottom: px2dp(20)
  },
  c_l_flow: {
    flexDirection: 'row'
  },
  l_c_icon: {
    width: px2dp(82),
    height: px2dp(70)
  },
  l_c_flow: {
    marginLeft: px2dp(11),
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  l_c_top_t: {
    marginTop: px2dp(6),
    fontSize: px2dp(14),
    color: '#333'
  },
  l_c_l_c: {
    color: '#666666',
    fontSize: px2dp(11)
  },
  l_jl_bg: {
    width: px2dp(44),
    height: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  l_jl_text: {
    color: '#FF951F'
  },
  r_c_date: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  r_c_text: {
    color: '#999999',
    fontSize: px2dp(11)
  }
})
