import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/info'
import { GoBack } from '../../../utils/goBack'

const OfficialInformation = (props: any) => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  //返回上一页
  const go_back = () => {

  }
  return (
    <SafeAreaView>
      <TopNavigationBar
        title={'官方消息'}
        statusBar={statusbar}
        style={{ backgroundColor: '#fff' }}
        leftButton={GoBack(props)}
      />
      <Text>官方消息</Text>
    </SafeAreaView>
  );
}

export default OfficialInformation;
