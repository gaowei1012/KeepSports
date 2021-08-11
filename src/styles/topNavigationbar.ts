import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'
import { NAV_BAR_H } from '../utils/navBar_StatusBar_Height'

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: NAV_BAR_H, // 根据平台设置高度
    paddingHorizontal: px2dp(15),
    justifyContent: 'space-between'
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBarButton: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#fff'
  },
  title: {
    width: px2dp(200),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  statusBar: {
    //height: STATUS_BAR_H,
  },
  leftBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: px2dp(50)
    // height: NAV_BAR_H, // 根据平台设置高度
  },
  rightBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: px2dp(60)
    // height: NAV_BAR_H, // 根据平台设置高度
  }
})

export default styles
