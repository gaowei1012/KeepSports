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
  }

})
