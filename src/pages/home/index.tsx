import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import { styles } from '../../styles/view-style/home'
import { Bottom } from '../../components/index'
import { px2dp } from '../../utils/px2dp'
import Swiper from 'react-native-swiper'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.home_bg__container} source={require('../../assets/pages/home/home_bg.png')}>
        <View style={styles.home_title__container}>
          <Image style={styles.title__avatar} source={require('../../assets/pages/home/avatar.png')} />
          <View style={styles.title__flow}>
            <Text style={styles.title__name}>遗失的美好</Text>
            <Text style={styles.title__desc}>北京运动达人对</Text>
          </View>
          <Bottom
            activeOpacity={1}
            text='高级'
            propStyles={{
              marginLeft: px2dp(21),
              marginTop: px2dp(-14)
            }}
            onPress={() => {}}
          />
        </View>
        {/* banner */}
        <Swiper autoplay paginationStyle={{
          marginBottom: px2dp(-20)
        }}>
          <View style={styles.swipple__flow}>
            <Image style={styles.swipple_image} source={require('../../assets/pages/home/banner.png')} />
          </View>
          <View style={styles.swipple__flow}>
            <Image style={styles.swipple_image} source={require('../../assets/pages/home/banner.png')} />
          </View>
          <View style={styles.swipple__flow}>
            <Image style={styles.swipple_image} source={require('../../assets/pages/home/banner.png')} />
          </View>
        </Swiper>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Home
