import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home_bg__container: {
    height: px2dp(249),
  },
  bg_flow__container: {
    width: width,
    height: px2dp(248)
  }
})
