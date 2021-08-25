import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF2EA'
  },
  sports_container: {
    height: height,
    width: width,
  },
  sports_num_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(76)
  },
  sports_num: {
    fontSize: px2dp(70),
    color: '#333',
    fontWeight: 'bold'
  },
  sports_gl: {
    color: '#A8A5B2',
    fontSize: px2dp(12),
    paddingTop: px2dp(30),
    fontWeight: '500'
  },
  sports_bg_container: {
    width: px2dp(345),
    height: px2dp(150),
    alignSelf: 'center',
    marginTop: px2dp(80),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sports_c_w: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: px2dp(22)
  },
  sports_c_i: {
    width: px2dp(40),
    height: px2dp(40)
  },
  sports_c_sum: {
    color: '#FFFFFF',
    fontSize: px2dp(30),
    fontWeight: 'bold'
  },
  desc: {
    color: '#FFFFFF',
    fontSize: px2dp(12),
    fontWeight: '500'
  },
  sports_start: {
    marginTop: px2dp(49),
    flexDirection: 'column',
    alignItems: 'center'
  },
  sports_c_mb: {
    width: px2dp(106),
    height: px2dp(52),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sports_c_mb_text: {
    color: '#24C789',
    fontSize: px2dp(14),
    fontWeight: '500',
    marginRight: px2dp(4)
  },
  sports_mb_i: {
    width: px2dp(7),
    height: px2dp(12)
  },
  sports_c_start: {
    marginTop: px2dp(13),
    width: px2dp(102),
    height: px2dp(102),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sports_c_start_text: {
    fontSize: px2dp(20),
    color: '#fff',
    marginTop: px2dp(36),
    fontWeight: '800'
  },
  // modal
  sports_modal_container: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .45)'
  },
  sports_modal_bg: {
    width: px2dp(295),
    height: px2dp(294)
  },
  sports_modal_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: px2dp(24),
    marginRight: px2dp(36),
    paddingBottom: px2dp(21),
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: px2dp(1),
  },
  sports_modal_top_text: {
    width: px2dp(99),
    fontSize: px2dp(17),
    color: '#fff',
    fontWeight: '800',
    marginTop: px2dp(20),
    marginLeft: px2dp(10)

  },
  sports_modal_jb: {
    marginTop: px2dp(27),
    width: px2dp(62),
    height: px2dp(70)
  },
  sports_modal_title: {
    alignSelf: 'center',
    color: '#fff',
    marginTop: px2dp(20)
  },
  sports_modal_content: {
    marginTop: px2dp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  sports_modal_bottom: {
    marginTop: px2dp(30),
    justifyContent: 'flex-end',
    width: px2dp(295),
    height: px2dp(52)
  },
  sports_modal_content_t: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sports_modal_content_t1: {
    color: '#fff',
    fontSize: px2dp(11),
    fontWeight: '500'
  },
  sports_modal_content_t2: {
    color: '#fff',
    fontSize: px2dp(19),
    fontWeight: 'bold',
    marginTop: px2dp(6)
  },
  sports_modal_bottom_c: {
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(295),
    height: px2dp(52)
  },
  sports_modal_bottom_t: {
    color: '#fff',
    fontSize: px2dp(17),
    fontWeight: '800'
  },
  // 排行榜
  leaderboard_container: {
    width: width,
    height: px2dp(667)
  },
  leaderboard_container_bottom: {
    width: width,
    height: px2dp(370),
    position: 'absolute',
    bottom: 0
  },
  top_switch_wrapper: {
    width:px2dp(129),
    height: px2dp(33),
    marginTop: px2dp(29),
    marginBottom: px2dp(15)
  },
  top_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  top_icon_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  top_h_icon: {
    width: px2dp(43),
    height: px2dp(32)
  },
  top_h_icon_bj: {
    width: px2dp(51),
    height: px2dp(39)
  },
  top_av_icon: {
    width: px2dp(68),
    height: px2dp(68),
    marginTop: px2dp(-10)
  },
  top_av_icon_bj: {
    width: px2dp(78),
    height: px2dp(78),
    marginTop: px2dp(-10)
  },
  top_b_icon: {
    width:px2dp(77),
    height: px2dp(18),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(-10)
  },
  top_b_icon_bj: {
    width:px2dp(77),
    height: px2dp(18),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: px2dp(-10)
  },
  leaderboard_content: {
    alignSelf: 'center',
    width: px2dp(345),
    marginTop: px2dp(10)
  },
  leaderboard_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: px2dp(13),
    marginTop: px2dp(10),
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: px2dp(1)
  },
  left_flow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  left_pm: {
    color: '#666',
    fontSize: px2dp(12),
    fontWeight: '500'
  },
  left_avatar: {
    width: px2dp(40),
    height: px2dp(40),
    marginLeft: px2dp(15),
    marginRight: px2dp(11)
  },
  left_name: {
    color: '#333333',
    fontSize: px2dp(14),
    fontWeight: 'normal'
  },
  right_flow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  distance_num: {
    color: '#24C789',
    fontSize: px2dp(14),
    fontWeight: '800'
  },
  distance_text: {
    color: '#333',
    fontSize: px2dp(14),
    fontWeight: '800'
  }

})
