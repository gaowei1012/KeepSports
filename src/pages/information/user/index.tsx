/*
 * @Author: 执念
 * @Date: 2021-08-19 10:57:02
 * @LastEditTime: 2021-08-24 16:51:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/information/user/index.tsx
 */
import { useState } from 'react'
import { View, SafeAreaView, Text, Image, Switch } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/info'
import { GoBack } from '../../../utils/goBack'

const UserInformation = (props: any) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
    translucent: false,
    hidden: false
  }
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }
  return (
    <SafeAreaView style={styles.user_info_container}>
      <TopNavigationBar title={'消息通知'} statusBar={statusbar} style={{ backgroundColor: '#fff' }} leftButton={GoBack(props, true)} />
      <View style={styles.user_info_wrapper}>
        <Image style={styles.user_info_image} source={require('../../../assets/pages/info/tips.png')} />
        <View style={styles.info_content}>
          <View>
            <Text style={styles.title_text}>消息通知</Text>
            <Text style={styles.info_desc}>关闭后，点赞、评论、关注等将不再提示</Text>
          </View>
          <Switch value={isEnabled} onValueChange={toggleSwitch} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserInformation
