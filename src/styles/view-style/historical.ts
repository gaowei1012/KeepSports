import { StyleSheet } from 'react-native'
import { px2dp, width, height } from '../../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    width: px2dp(345),
    height: px2dp(276),
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  history_list_wrapper: {
    flexDirection: 'row',
    width: px2dp(263),
    backgroundColor: '#24C789',
    height: px2dp(34),
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: px2dp(34/2),
    overflow: 'hidden'
  },
  list_btn: {
    backgroundColor: '#fff',
    height: px2dp(32),
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(64)
  },
  list_btn_text: {
    color: '#24C789'
  },
  no_list_btn_text: {
    color: '#fff',
  },
  no_list_btn: {
    backgroundColor: '#24C789',
    height: px2dp(32),
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(64)
  },
  list_btn_a: {
    borderTopLeftRadius: px2dp(34/2),
    borderBottomLeftRadius: px2dp(34/2)
  },
  list_btn_b: {
    borderTopRightRadius: px2dp(34/2),
    borderBottomRightRadius: px2dp(34/2)
  },
  statistics_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: px2dp(16),
    paddingTop: px2dp(21),
    paddingBottom: px2dp(9),
    backgroundColor: '#F6F6F6'
  },
  statistics_title_wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  list_line: {
    width: px2dp(3),
    height: px2dp(17),
    backgroundColor: '#24C789',
    borderRadius: px2dp(8)
  },
  statistics_title_text: {
    color: '#333333',
    fontSize: px2dp(16),
    fontWeight: '800',
    marginLeft: px2dp(9)
  },
  statistics_desc: {
    color: '#999999',
    fontSize: px2dp(12),
    fontWeight: 'normal'
  },
  statistics_desc_c: {
    color: '#FDAC53',
    fontSize: px2dp(12),
    fontWeight: 'normal'
  },
  statistics_content: {
    width: px2dp(335),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: px2dp(16),
    paddingBottom: px2dp(15),
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: px2dp(1),
    alignItems: 'center'
  },
  statistics_list: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statistics_icon: {
    width: px2dp(33),
    height: px2dp(33)
  },
  statistics_content_title: {
    color: '#666666',
    fontSize: px2dp(14),
    marginLeft: px2dp(9)
  },
  statistics_content_r: {
    fontSize: px2dp(20),
    color: '#333333',
    fontWeight: 'bold'
  }
})
