import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#FAFAFA'
  },
  establish_bg__container: {
    width: width,
    height: px2dp(247)
  },
  establish_bg__top: {
    width: px2dp(346),
    height: px2dp(112),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: px2dp(29)
  },
  establish_bg__content: {
    width: width,
    height: px2dp(454),
    alignItems: 'center',
    marginTop: px2dp(101)
  },
  establish_bg__content_photon: {
    width: px2dp(120),
    height: px2dp(120),
    justifyContent: 'center',
    alignItems: 'center'
  },
  establish_bg__content_photon_icon: {
    width: px2dp(39),
    height: px2dp(33)
  },
  establish_bg__content_btn: {
    width: px2dp(345),
    height: px2dp(38),
    borderRadius: px2dp(19),
    backgroundColor: '#24C789',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px2dp(180)
  },
  establish_bg__content_next_text: {
    color: '#fff',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  avatar_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar_icon: {
    width: px2dp(27),
    height: px2dp(27)
  },
  avatar_text: {
    color: '#333333',
    fontSize: px2dp(13),
    fontWeight: '500',
    marginTop: px2dp(13)
  },
  create_establish_container: {
    height: height,
    backgroundColor: '#F6F6F6'
  },
  create_establish: {
    backgroundColor: '#24C789',
    width: px2dp(53),
    height: px2dp(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: px2dp(11)
  },
  create_text: {
    color: '#fff',
    fontSize: px2dp(11),
    fontWeight: 'bold'
  },
  create_content_wrapper: {
    width: px2dp(345),
    alignSelf: 'center',
    marginTop: px2dp(10)
  },
  create_content_line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    width: px2dp(3),
    height: px2dp(17),
    borderRadius: px2dp(8),
    backgroundColor: '#24C789'
  },
  line_text: {
    fontSize: px2dp(15),
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: px2dp(10)
  },
  content_wrapper: {
    width: px2dp(345),
    height: px2dp(95),
    alignSelf: 'center',
    marginTop: px2dp(18),
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_list_wrapper: {
    flexDirection: 'column',
    marginLeft: px2dp(10)
  },
  content_list_top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content_icon: {
    width: px2dp(82),
    height: px2dp(75),
    marginLeft: px2dp(14)
  },
  content_gj: {
    width: px2dp(36),
    height: px2dp(17),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: px2dp(6)
  },
  content_text: {
    color: '#fff',
    fontSize: px2dp(11),
    fontWeight: '800'
  },
  content_desc: {
    fontSize: px2dp(12),
    color: '#999',
    fontWeight: 'bold'
  },
  content_km: {
    color: '#999',
    fontSize: px2dp(11),
    fontWeight: 'bold',
    marginRight: px2dp(9)
  },
  // information
  group_container: {
    height: height,
    backgroundColor: '#FAFAFA'
  },
  information_container: {

  },
  information_top_container: {
    width: px2dp(358),
    alignSelf: 'center',
    height: px2dp(163)
  },
  information_avatar_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: px2dp(17),
    marginVertical: px2dp(22)
  },
  information_avatar_img: {
    width: px2dp(55),
    height: px2dp(55)
  },
  information_avatar_name: {
    flexDirection: 'column',
    marginLeft: px2dp(18)
  },
  group_top_content_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: px2dp(310),
    alignSelf: 'center'
    // alignItems: 'flex-start',
    // marginHorizontal: px2dp(20),
    // marginVertical: px2dp(20)
  },
  group_title: {
    color: '#24C789',
    fontSize: px2dp(13)
  },
  group_top_content: {
    color: '#666666',
    fontSize: px2dp(13),
    lineHeight: px2dp(23)
  },
  group_more: {
    color: '#FF9E21',
    fontSize: px2dp(13),
    paddingLeft: px2dp(8)
  },
  information_t_t: {
   color: '#333333',
   fontSize: px2dp(16),
  fontWeight: 'normal'
  },
  information_t_h: {
    color: '#666666',
    fontSize: px2dp(13),
    fontWeight: 'normal',
    marginTop: px2dp(12)
  },
  group_t_c: {
    width: px2dp(345),
    height: px2dp(118),
    alignSelf: 'center',
    marginTop: px2dp(11)
  },
  exit_wrapper: {
    width: px2dp(345),
    height: px2dp(56),
    backgroundColor: '#fff',
    borderRadius: px2dp(32),
    alignSelf: 'center',
    marginTop: px2dp(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  exit_text: {
    color: '#24C789',
    fontSize: px2dp(14)
  },
  group_t_tips: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: px2dp(10),
    marginTop: px2dp(20)
  },
  group_t_tips_title: {
    color: '#333333',
    fontSize: px2dp(14),
    fontWeight: 'bold'
  },
  group_run: {
    width: px2dp(34),
    height: px2dp(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEC7C3',
    borderRadius: px2dp(8)
  },
  group_run_text: {
    color: '#FD4538',
    fontSize: px2dp(14)
  },
  group_t_tips_img: {
    width: px2dp(32),
    height: px2dp(32)
  }
})
