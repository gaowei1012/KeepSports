import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
  tabBox: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  messageBox: {
    position: 'absolute',
    top: px2dp(-5),
    right: px2dp(-6),
    width: px2dp(12),
    height: px2dp(12),
    borderRadius: px2dp(6),
    backgroundColor: '#E83939',
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalMessage: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: -100
  },
  messageNum: {
    color: '#fff',
    fontSize: px2dp(10)
  }
})

export default styles
