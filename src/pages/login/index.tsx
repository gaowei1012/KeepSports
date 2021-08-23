import React from 'react'
import { View, TextInput, Text, SafeAreaView } from 'react-native'
import { styles } from '../../styles/view-style/login'

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text>登录</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Login
