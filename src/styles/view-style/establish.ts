import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFAFA'
  },
  establish_bg__container: {
    width: width,
    height: px2dp(247)
  },
  establish_bg__top: {
    width: px2dp(346),
    height: px2dp(112),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: px2dp(29)
  },
  establish_bg__content: {
    width: width,
    height: px2dp(454),
    alignItems: 'center',
    marginTop: px2dp(101),
  },
  establish_bg__content_photon: {
    width: px2dp(120),
    height: px2dp(120),
    justifyContent: 'center',
    alignItems: 'center'
  },
  establish_bg__content_photon_icon: {
    width: px2dp(39),
    height: px2dp(33)
  },
  establish_bg__content_btn: {
    width: px2dp(345),
    height: px2dp(38),
    borderRadius: px2dp(19),
    backgroundColor: '#24C789',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px2dp(180)
  },
  establish_bg__content_next_text: {
    color: '#fff',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  avatar_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar_icon: {
    width: px2dp(27),
    height: px2dp(27)
  },
  avatar_text: {
    color: '#333333',
    fontSize: px2dp(13),
    fontWeight: '500',
    marginTop: px2dp(13)
  }
})
