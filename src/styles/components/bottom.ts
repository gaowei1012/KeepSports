import { StyleSheet } from 'react-native'
import { px2dp } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  bottomContainer: {
    width: px2dp(55),
    height: px2dp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA5544',
    borderRadius: px2dp(8),
  },
  text: {
    color: '#fff',
    fontSize: px2dp(10),
  }
})
