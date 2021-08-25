/*
 * @Author: 执念
 * @Date: 2021-08-13 21:35:50
 * @LastEditTime: 2021-08-18 21:42:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/home.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    marginTop: px2dp(-100),
    // overflow: 'hidden',
    // position: 'relative',
    // top: -100,
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
    height: px2dp(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  home__container_tab_flow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: px2dp(31),
    // justifyContent: 'center'
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
  toady_step_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toady_step_num: {
    fontWeight: '600',
    marginTop: px2dp(15),
    fontSize: px2dp(27),
    color: '#333333'
  },
  toady_step_edit: {
    width: px2dp(13),
    height: px2dp(14),
    marginLeft: px2dp(7)
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
    justifyContent: 'center',
    flexDirection: 'row'
  },
  start_exercise_icon: {
    width: px2dp(26),
    height: px2dp(29)
  },
  start_exercise__text: {
    color: '#fff',
    fontSize: px2dp(15),
    fontWeight: 'bold',
    marginLeft: px2dp(2)
  },
  home_leaderboard__container: {
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
    fontSize:px2dp(20),
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
  history_data_charts_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: px2dp(38),
    paddingLeft: px2dp(10),
    paddingRight: px2dp(10)
  },
  history_dw_text: {
    color: '#999999',
    fontSize: px2dp(12)
  },
  history_title_text: {
    fontSize: px2dp(15),
    color: '#333',
    fontWeight: 'bold'
  },
  history_date_wrapper: {
    width: px2dp(70),
    height: px2dp(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#24C789',
    borderRadius: px2dp(11),
    overflow: 'hidden',
  },
  history_date_text: {
    color: '#FFFFFF',
    fontSize: px2dp(11)
  },
  history_date_text_r: {
    color: '#24C789',
    fontSize: px2dp(11)
  },
  date_wrapper: {
    width: px2dp(22),
    height: px2dp(19.8),
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  no_date_wrapper: {
    width: px2dp(22),
    height: px2dp(19.8),
    backgroundColor: '#24C789',
    alignItems:'center',
    justifyContent: 'center'
  },
  no_date_wrapper_c: {
    borderTopRightRadius: px2dp(10),
    borderBottomRightRadius: px2dp(10)
  },
  no_date_wrapper_a: {
    borderTopLeftRadius: px2dp(10),
    borderBottomLeftRadius: px2dp(10)
  },
  date_text: {
    color: '#24C789',
    fontSize: px2dp(11),
    fontWeight: '600'
  },
  no_date_text: {
    color: '#fff',
    fontSize: px2dp(11),
    fontWeight: '600'
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
    alignItems:'center'
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
    flexDirection: 'row',
  },
  l_c_icon: {
    width: px2dp(82),
    height: px2dp(70)
  },
  l_c_flow: {
    marginLeft: px2dp(11),
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
  },
  l_jl_text: {
    color: '#FF951F'
  },
  r_c_date: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  r_c_text: {
    color: '#999999',
    fontSize: px2dp(11)
  },
  tab_default: {
    // marginRight: px2dp(31)
  },
  actionText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: px2dp(18)
  },
  noActionText: {
   fontSize: px2dp(15),
   color: '#666'
  },
  actionLine: {
    width: px2dp(24),
    height: px2dp(13),
    marginTop: px2dp(6)
  },
  noActionLine: {
    width: px2dp(24),
    height: px2dp(13),
    marginTop: px2dp(6)
  },
  actionRioa: {

  },
  noActionRioa: {

  },
  // detail
  dynamic_content_cotainer: {
    height: height,
  },
  dynamic_content_flow__wrapper: {
    width: width,
    backgroundColor: '#fff',
    paddingVertical: px2dp(10)
  },
  dynamic_content_flow: {
    width: px2dp(345),
    alignSelf: 'center',
    marginBottom: px2dp(20)
  },
  dy_top_avatar_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar_text: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: px2dp(10)
  },
  avatar_desc: {
    color: '#999999',
    fontSize: px2dp(10),
    marginTop: px2dp(8)
  },
  dy_top_left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: px2dp(36),
    height: px2dp(36)
  },
  avatar_right_wrapper: {
    marginLeft: px2dp(10)
  },
  dy_top_left_right_wrapper: {},
  dy_top_right_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(59),
    height: px2dp(25)
  },
  dy_top_right_add: {
    width: px2dp(13),
    height: px2dp(13)
  },
  dy_top_right_add_text: {
    fontSize: px2dp(14),
    color: '#24C789',
    marginLeft: px2dp(2)
  },
  dy_content_wrapper: {
    marginTop: px2dp(14),
    width: px2dp(344),
    alignSelf: 'center'
  },
  content_img_wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: px2dp(15)
  },
  content_img: {
    width: px2dp(345),
    height: px2dp(259)
  },
  huati: {
    width: px2dp(82),
    height: px2dp(28),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(16)
  },
  huati_text: {
    color: '#FC9C32',
    fontSize: px2dp(12),
    fontWeight: 'bold'
  },
  dy_comment_wrapper: {
    width: px2dp(345),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dy_comment_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dy_comment_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dy_comment_left_title: {
    color: '#333',
    fontSize: px2dp(17),
    fontWeight: 'bold',
  },
  dy_comment_left_mun: {
    color: '#333',
    fontSize: px2dp(17),
    fontWeight: 'bold',
    marginLeft: px2dp(8)
  },
  dy_comment_botton_wrapper: {
    width: width,
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  dy_comment_botton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textinput: {
    width: px2dp(346),
    height: px2dp(35),
    borderRadius: px2dp(35/2),
    backgroundColor: '#F7F7F7',
    alignSelf: 'center',
    paddingLeft: px2dp(15),
    marginBottom: px2dp(36)
  },
  dy_comment_icon: {
    width: px2dp(19),
    height: px2dp(17),
    marginLeft: px2dp(10)
  },
  dy_comment_num: {
    marginLeft: px2dp(15),
    color: '#333',
    fontWeight: '500',
    fontSize: px2dp(12)
  },
  comment_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: px2dp(15),
    marginRight: px2dp(15),
    marginTop: px2dp(22)
  },
  comment_left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment_icon: {
    width: px2dp(44),
    height: px2dp(44)
  },
  comment_content_icon_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(34)
  },
  comment_left: {
    marginLeft: px2dp(17),
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  name: {
    color: '#555555',
    fontSize: px2dp(14),
    marginBottom: px2dp(9)
  },
  title: {
    color: '#333',
    fontSize: px2dp(18),
    fontWeight: 'bold',
    marginBottom: px2dp(9)
  },
  date: {
    color: '#999',
    fontSize: px2dp(10),
    fontWeight: 'bold',
    marginBottom: px2dp(9)
  }
})
