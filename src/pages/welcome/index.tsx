import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationUtil } from '../../navigation/NavigationUtil'

const Welcome = (props: { navigation: any }) => {
  // 跳转到首页
  useEffect(() => {
    setTimeout(() => {
      NavigationUtil.restToHomePage({
        navigation: props.navigation
      })
    }, 2000)
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
