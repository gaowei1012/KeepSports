import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    width: px2dp(345),
    alignSelf: 'center'
  },
  target_top_jl: {
    marginTop: px2dp(81),
    alignItems: 'center',
    justifyContent: 'center'
  },
  target_top_sum: {
    fontSize: px2dp(60),
    fontWeight: 'bold',
    color: '#333'
  },
  target_top_text: {
    fontSize: px2dp(14),
    color: '#333',
    marginTop: px2dp(16),
    fontWeight: 'bold'
  },
  target_c: {
    marginTop: px2dp(75),
    backgroundColor: '#24C789',
    width: px2dp(317),
    height: px2dp(44),
    alignSelf: 'center',
    borderRadius: px2dp(22),
    justifyContent: 'center',
    alignItems: 'center'
  },
  target_c_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: px2dp(17)
  },
  target_sum_text: {
    color: '#9A9FAD',
    fontSize: px2dp(24),
    fontWeight: 'bold'
  },
  ac_target_sum_text: {
    color: '#333',
    fontSize: px2dp(24),
    fontWeight: 'bold'
  },
  target_content: {
    marginTop: px2dp(36),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  target_content_bg:{
    width: px2dp(105),
    height: px2dp(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px2dp(15)
  },
  tl: {
    width: px2dp(20),
    height: px2dp(13),
    alignSelf: 'flex-start',
    marginTop: px2dp(-16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  c: {
    color: '#fff',
    fontSize: px2dp(8),
    fontWeight: '500'
  },
  textinput: {
    width: px2dp(253),
    height: px2dp(56),
    backgroundColor: '#EBFAF4',
    color: '#333',
    fontSize: px2dp(28)
  }
})
