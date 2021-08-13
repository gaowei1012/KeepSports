import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { styles } from '../../styles/view-style/home'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home_bg__container}>
        <Image style={styles.bg_flow__container} source={require('../../assets/pages/home/home_bg.png')}/>
      </View>
    </SafeAreaView>
  )
}

export default Home
