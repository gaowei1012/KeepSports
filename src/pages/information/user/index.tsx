import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/info'
import { GoBack } from '../../../utils/goBack'

const UserInformation = (props: any) => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView>
      <TopNavigationBar
        title={'消息通知'}
        statusBar={statusbar}
        style={{ backgroundColor: '#fff' }}
        leftButton={GoBack(props)}
      />
      <Text>消息通知</Text>
    </SafeAreaView>
  );
}

export default UserInformation;
