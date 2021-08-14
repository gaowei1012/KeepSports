import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import { styles } from '../../styles/view-style/home'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.home_bg__container}
        source={require('../../assets/pages/home/home_bg.png')}
      >
        <View style={styles.home_title__container}>
          <Image style={styles.title__avatar} source={require('../../assets/pages/home/avatar.png')}/>
          <View style={styles.title__flow}>
            <Text style={styles.title__name}>遗失的美好</Text>
            <Text style={styles.title__desc}>北京运动达人对</Text>
          </View>
        </View>
      </ImageBackground>
      {/* <View style={styles.home_bg__container}>
        <Image style={styles.bg_flow__container} source={require('../../assets/pages/home/home_bg.png')}/>
      </View>
      <View>
        <Text>jjj</Text>
      </View> */}
      {/* <View style={styles.swipple__flow}>

      </View> */}
    </SafeAreaView>
  )
}

export default Home
