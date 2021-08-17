import React, { useState } from 'react'
import { View, SafeAreaView, Text, Image, Switch, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/info'
import { GoBack } from '../../../utils/goBack'

const UserInformation = (props: any) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }
  return (
    <SafeAreaView style={styles.user_info_container}>
      <TopNavigationBar title={'消息通知'} statusBar={statusbar} style={{ backgroundColor: '#fff' }} leftButton={GoBack(props)} />
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
