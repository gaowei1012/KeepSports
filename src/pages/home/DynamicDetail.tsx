import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/historical'
import { GoBack } from '../../utils/goBack'

const DynamicDetail = (props: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>DynamicDetail</Text>
      </View>
    </SafeAreaView>
  )
}

export default DynamicDetail
