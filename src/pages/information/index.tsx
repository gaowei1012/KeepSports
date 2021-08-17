/*
 * @Author: 执念
 * @Date: 2021-08-11 15:26:52
 * @LastEditTime: 2021-08-17 19:52:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/information/index.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/info'

const informationData: any = [
  {
    id: 1,
    icon: require('../../assets/pages/info/sys_info.png'),
    title: '系统通知',
    desc: '软件已更新至最新版本',
    updateAt: '凌晨：034',
    message: 11
  },
  {
    id: 2,
    icon: require('../../assets/pages/info/kf.png'),
    title: '官方助手',
    desc: '',
    updateAt: '08/12',
    message: null
  }
]

const Information = () => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }

  const go_to_page = (item: {id: number}) => {
    console.log('item', item)
    if (item.id == 1) {
      NavigationUtil.goPage({}, "UserInformation")
    } else {
      NavigationUtil.goPage({}, "OfficialInformation")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar
        title={'聊天'}
        statusBar={statusbar}
        style={{ backgroundColor: '#F7F7F7' }}
        leftButton={
          <TouchableOpacity activeOpacity={1}>
            <Image style={styles.l_clear_icon} resizeMode='cover' source={require('../../assets/pages/info/clear.png')} />
          </TouchableOpacity>
        }
        rightButton={
          <TouchableOpacity activeOpacity={1}>
            <Image style={styles.r_me_icon} resizeMode='cover' source={require('../../assets/pages/info/me.png')} />
          </TouchableOpacity>
        }
      />
      <View style={styles.info_container}>
        {informationData.map((item: { icon: any; title: string; desc: string; updateAt: string; message: number; id: number }) => (
          <TouchableOpacity style={styles.info_wrapper} activeOpacity={1} onPress={() => go_to_page(item)}>
            <View style={styles.info_avatar__title}>
              <Image style={styles.info_icon} source={item.icon} />
              <View style={styles.info_content_wrapper}>
                <View style={styles.info_title_flow}>
                  <Text style={styles.info_title_text}>{item.title}</Text>
                  <Text style={styles.info_date}>{item.updateAt}</Text>
                </View>
                <View style={styles.info_btn_flow}>
                  <Text style={styles.info_desc}>{item.desc}</Text>
                  {item.message !== null ? (
                    <View style={styles.info_tips}>
                      <Text style={styles.info_tips_text}>{item.message}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Information
