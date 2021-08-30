import { StyleSheet, Platform } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#24C789'
  },
  user_bg_container: {
    width: width,
    height: height,
    marginTop: px2dp(58)
  },
  user_content_container: {
    marginTop: px2dp(180),
    width: px2dp(345),
    alignSelf: 'center'
  },
  user_content_flow: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: px2dp(1),
    paddingBottom: px2dp(16),
    marginBottom: px2dp(28),
    flexDirection: 'row',
    alignItems: 'center'
  },
  user_content_btn: {
    width: px2dp(345),
    height: px2dp(44),
    borderRadius: px2dp(22),
    backgroundColor: '#24C789',
    alignItems: 'center',
    justifyContent: 'center'
  },
  no_user_content_btn: {
    width: px2dp(345),
    height: px2dp(44),
    borderRadius: px2dp(22),
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  user_content_btn_text: {
    fontSize: px2dp(17),
    color: '#fff',
    fontWeight: 'normal'
  },
  user_tk_container: {
    marginTop: px2dp(37),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  futk: {
    color: '#BCBBBB'
  },
  fll: {
    color: '#FDAC53'
  },
  mine_pwd: {
    width: px2dp(16),
    height: px2dp(20),
    marginRight: px2dp(11),
    marginLeft: px2dp(2)
  },
  mine_phone: {
   width: px2dp(16),
   height: px2dp(20),
   marginRight: px2dp(11),
   marginLeft: px2dp(2)
  },
  checkbox: {
    width:px2dp(16),
    height: px2dp(16),
    marginRight: Platform.OS === 'ios' ? px2dp(8) : px2dp(18)
  }
})
