import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import { styles } from '../../styles/view-style/home'
import { Bottom } from '../../components/index'
import { px2dp } from '../../utils/px2dp'
import Swiper from 'react-native-swiper'

const bannerData: any[] = [
  {icon: require('../../assets/pages/home/banner.png'), id: 1},
  {icon: require('../../assets/pages/home/banner.png'), id: 2},
  {icon: require('../../assets/pages/home/banner.png'), id: 3},
]

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
        <View style={styles.swipple__flow}>
          <Swiper autoplay paginationStyle={{
            marginBottom: px2dp(-20)
          }}>
            {bannerData.map((item) => (
              <Image style={styles.swipple_image} source={item.icon} key={item.id}/>
            ))}
          </Swiper>
        </View>
      </ImageBackground>
      <View style={styles.home__content_container}>
        <View style={styles.home__container_tab}>
          <Text>switch tab</Text>
        </View>
        <ImageBackground style={styles.home__sport_container} source={require('../../assets/pages/home/sports.png')}>
          <Text>hello</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default Home
