import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
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
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome
