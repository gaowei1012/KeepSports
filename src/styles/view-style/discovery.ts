import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  discovery_top_container: {
    width: px2dp(345),
    alignSelf: 'center'
  },
  discovery_top_flow: {
    marginHorizontal: px2dp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  discovery_top_bg: {
    width: px2dp(147),
    height: px2dp(75)
  },
  discovery_content_flow: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: px2dp(17),
    paddingTop: px2dp(17),
    paddingRight: px2dp(13),
    paddingBottom: px2dp(17)
  },
  icon: {
    width: px2dp(41),
    height: px2dp(38)
  },
  title: {
    color:'#FFFFFF',
    fontSize: px2dp(16),
    fontWeight: 'bold'
  },
  desc: {
    marginTop: px2dp(11),
    color:'#FFFFFF',
    fontSize: px2dp(12),
  },
  discovery_content: {
    width: px2dp(345),
    alignSelf: 'center',
    marginTop: px2dp(31),
  },
  content_flow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: px2dp(6)
  },
  t_image_flow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wx: {
    marginTop: px2dp(6),
    width: px2dp(24),
    height: px2dp(13)
  },
  td_text: {
    fontSize: px2dp(18),
    color: '#333333',
    fontWeight: 'bold'
  },
  more_flow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  more_text: {
    color: '#999999',
    fontSize: px2dp(12),
    marginRight: (5)
  },
  more_image: {
    width: px2dp(6),
    height: px2dp(10)
  },
  bottom_content: {
    backgroundColor:'#fff',
    alignItems: 'center'
  },
  bottom_content_flow: {
    width: px2dp(353),
    height: px2dp(192),
    marginTop: px2dp(15),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom_content_c: {
    width: px2dp(344),
    height: px2dp(36),
    marginBottom: px2dp(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  b_c_desc: {
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize: px2dp(16)
  }
})
