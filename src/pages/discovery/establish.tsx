import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/discovery'
import { GoBack } from '../../utils/goBack'

const statusbar = {
  backgroundColor: '#FAFAFA',
  barStyle: 'dark-content'
}

const Establish = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={GoBack(props)}  title={'创建团'} statusBar={statusbar} style={{ backgroundColor: '#FAFAFA' }} />
      <ScrollView>
        <Text>创建团</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Establish
