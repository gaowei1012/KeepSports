/*
 * @Author: 执念
 * @Date: 2021-08-18 09:09:02
 * @LastEditTime: 2021-08-18 09:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/dynamic.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  dynamic_top_switch: {
    width: px2dp(263),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dynamic_top_title: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dynamic_top_icon: {
    width: px2dp(24),
    height: px2dp(13),
    marginTop: px2dp(4)
  },
  no_dynamic_top_icon: {
    width: px2dp(24),
    height: px2dp(13),
    marginTop: px2dp(4)
  },
  action_title: {
    color: '#333333',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  no_action_title: {
    color: '#666666',
    fontSize: px2dp(17),
    fontWeight: 'bold'
  },
  // content
  dynamic_content_scrollview: {
    marginTop: px2dp(10),
    backgroundColor: '#F6F6F6'
  },
  dynamic_content_flow__wrapper: {
    width: width,
    backgroundColor: '#fff',
    paddingVertical: px2dp(10)
  },
  dynamic_content_flow: {
    width: px2dp(345),
    alignSelf: 'center',
    marginBottom: px2dp(20)
  },
  dy_top_avatar_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar_text: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: px2dp(10)
  },
  avatar_desc: {
    color: '#999999',
    fontSize: px2dp(10),
    marginTop: px2dp(8)
  },
  dy_top_left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: px2dp(36),
    height: px2dp(36)
  },
  avatar_right_wrapper: {
    marginLeft: px2dp(10)
  },
  dy_top_left_right_wrapper: {},
  dy_top_right_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(59),
    height: px2dp(25)
  },
  dy_top_right_add: {
    width: px2dp(13),
    height: px2dp(13)
  },
  dy_top_right_add_text: {
    fontSize: px2dp(14),
    color: '#24C789',
    marginLeft: px2dp(2)
  },
  dy_content_wrapper: {
    marginTop: px2dp(14),
    width: px2dp(344),
    alignSelf: 'center'
  },
  content_img_wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: px2dp(15)
  },
  content_img: {
    width: px2dp(112),
    height: px2dp(115)
  },
  dy_comment_wrapper: {
    width: px2dp(346),
    height: px2dp(67),
    paddingHorizontal: px2dp(16),
    paddingVertical: px2dp(10),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dy_comment_new_icon: {
    width: px2dp(83),
    height: px2dp(32),
    alignItems: 'center'
  },
  dy_comment_text: {
    marginTop: px2dp(7),
    color: '#FC9422',
    fontSize: px2dp(13)
  },
  comment_name: {
    color: '#24C789',
    fontSize: px2dp(13)
  },
  comment_content: {
    color: '#666',
    fontSize: px2dp(13)
  },
  dy_bottom_wrapper: {
    paddingVertical: px2dp(17),
    paddingHorizontal: px2dp(40),
    width: px2dp(345),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn_icon: {
    width: px2dp(19),
    height: px2dp(18)
  },
  dy_line: {
    height: px2dp(10)
  },
  dy_flow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn_text: {
    color: '#333333',
    fontSize: px2dp(13),
    marginLeft: px2dp(15)
  }
})
