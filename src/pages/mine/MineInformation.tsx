import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/login'
import { GoBack } from '../../utils/goBack'

const MineInformation = (props: any) => {
  return (
    <SafeAreaView>
      <TopNavigationBar leftButton={GoBack(props, true)} title='个人资料' />
      <View>
        <Text>个人资料</Text>
      </View>
    </SafeAreaView>
  )
}

export default MineInformation
