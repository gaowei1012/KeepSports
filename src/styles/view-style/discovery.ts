import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
})
