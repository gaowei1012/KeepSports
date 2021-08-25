/*
 * @Author: 执念
 * @Date: 2021-08-16 22:32:59
 * @LastEditTime: 2021-08-17 19:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/styles/view-style/info.ts
 */
import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  intent_container: {
    width: px2dp(340),
    height: px2dp(95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intent_list_left: {
    width: px2dp(101),
    height: px2dp(95),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  intent_list_edit: {
    width: px2dp(68),
    height: px2dp(29),
    alignItems: 'center',
    justifyContent: 'center'
  },
  intent_list_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: px2dp(16)
  },
  intent_list_content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    width: px2dp(22),
    height: px2dp(22),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: px2dp(7)
  },
  textinput: {
    width: px2dp(22),
    height: px2dp(22),
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: px2dp(5),
    paddingLeft: px2dp(10)
  }
})
