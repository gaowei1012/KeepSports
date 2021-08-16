/*
 * @Author: 执念
 * @Date: 2021-08-11 13:46:28
 * @LastEditTime: 2021-08-16 21:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/home/index.tsx
 */
import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../styles/view-style/home'
import { Bottom } from '../../components/index'
import { px2dp } from '../../utils/px2dp'
import Swiper from 'react-native-swiper'

const bannerData: any[] = [
  { icon: require('../../assets/pages/home/banner.png'), id: 1 },
  { icon: require('../../assets/pages/home/banner.png'), id: 2 },
  { icon: require('../../assets/pages/home/banner.png'), id: 3 }
]

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <Swiper
              autoplay
              paginationStyle={{
                marginBottom: px2dp(-20)
              }}>
              {bannerData.map((item) => (
                <Image style={styles.swipple_image} source={item.icon} key={item.id} />
              ))}
            </Swiper>
          </View>
        </ImageBackground>
        <View style={styles.home__content_container}>
          <View style={styles.home__container_tab}>
            <Text>switch tab</Text>
          </View>
          <ImageBackground style={styles.home__sport_container} source={require('../../assets/pages/home/sports.png')}>
            <View style={styles.sport__flow}>
              <View style={styles.sport__left}>
                <Text style={styles.today_step_count}>今日步数(步)</Text>
                <Text style={styles.toady_step_num}>1213</Text>
              </View>
              <View style={styles.sport__right}>
                <Text style={styles.today_step_count}>今日目标(公里)</Text>
                <Text style={styles.toady_step_num}>1221</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.start_exercise}>
              <Text style={styles.start_exercise__text}>开始运动</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {/* 排行榜 */}
        <View style={styles.home_leaderboard__container}>
          <ImageBackground style={styles.leaderboard__image__bg} source={require('../../assets/pages/home/leaderboard.png')}>
            <ImageBackground style={styles.l_icon__bg} source={require('../../assets/pages/home/buddy.png')}>
              <Image style={styles.l_icon_min} source={require('../../assets/pages/home/p.png')} />
            </ImageBackground>
            <Text style={styles.p_num}>120</Text>
            <Image style={styles.line} source={require('../../assets/pages/home/line.png')} />
            <Text style={styles.p_text}>好友排名</Text>
          </ImageBackground>
          <ImageBackground style={styles.leaderboard__image__bg} source={require('../../assets/pages/home/leaderboard.png')}>
            <ImageBackground style={styles.l_icon__bg} source={require('../../assets/pages/home/buddy.png')}>
              <Image style={styles.l_icon_min} source={require('../../assets/pages/home/p.png')} />
            </ImageBackground>
            <Text style={styles.p_num}>120</Text>
            <Image style={styles.line} source={require('../../assets/pages/home/line.png')} />
            <Text style={styles.p_text}>好友排名</Text>
          </ImageBackground>
          <ImageBackground style={styles.leaderboard__image__bg} source={require('../../assets/pages/home/leaderboard.png')}>
            <ImageBackground style={styles.l_icon__bg} source={require('../../assets/pages/home/buddy.png')}>
              <Image style={styles.l_icon_min} source={require('../../assets/pages/home/p.png')} />
            </ImageBackground>
            <Text style={styles.p_num}>120</Text>
            <Image style={styles.line} source={require('../../assets/pages/home/line.png')} />
            <Text style={styles.p_text}>好友排名</Text>
          </ImageBackground>
        </View>
        {/* 历史数据 */}
        <View style={styles.history_data_container}>
          <ImageBackground style={styles.history_data_bg} source={require('../../assets/pages/home/history_data.png')}>
            <View>
              <Text>历史数据</Text>
            </View>
          </ImageBackground>
        </View>
        {/* 同城动态 */}
        <View style={styles.city__container}>
          <View style={styles.city__top_title}>
            <View>
              <Text style={styles.city_top_text}>同城动态</Text>
              <Image style={styles.city_sle} source={require('../../assets/pages/home/sle.png')} resizeMode='center'/>
            </View>
            <View style={styles.arrow_container}>
              <Text style={styles.arrow_text}>更多</Text>
              <Image resizeMode='center' style={styles.arrow} source={require('../../assets/pages/home/arrow.png')}/>
            </View>
          </View>
          {/* content */}
          <View style={styles.city_content_container}>
            <View style={styles.c_l_flow}>
              <Image  style={styles.l_c_icon} source={require('../../assets/pages/home/icon.png')}/>
              <View style={styles.l_c_flow}>
                <Text style={styles.l_c_top_t}>拯救地球李小姐</Text>
                <Text style={styles.l_c_l_c}>有约着一起去爬山的吗？</Text>
                <ImageBackground resizeMode='center' style={styles.l_jl_bg} source={require('../../assets/pages/home/jl.png')} >
                  <Text style={styles.l_jl_text}>36km</Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.r_c_date}>
              <Text style={styles.r_c_text}>2分钟前</Text>
            </View>
          </View>
          <View style={styles.city_content_container}>
            <View style={styles.c_l_flow}>
              <Image  style={styles.l_c_icon} source={require('../../assets/pages/home/icon.png')}/>
              <View style={styles.l_c_flow}>
                <Text style={styles.l_c_top_t}>拯救地球李小姐</Text>
                <Text style={styles.l_c_l_c}>有约着一起去爬山的吗？</Text>
                <ImageBackground resizeMode='center' style={styles.l_jl_bg} source={require('../../assets/pages/home/jl.png')} >
                  <Text style={styles.l_jl_text}>36km</Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.r_c_date}>
              <Text style={styles.r_c_text}>2分钟前</Text>
            </View>
          </View>
          <View style={styles.city_content_container}>
            <View style={styles.c_l_flow}>
              <Image  style={styles.l_c_icon} source={require('../../assets/pages/home/icon.png')}/>
              <View style={styles.l_c_flow}>
                <Text style={styles.l_c_top_t}>拯救地球李小姐</Text>
                <Text style={styles.l_c_l_c}>有约着一起去爬山的吗？</Text>
                <ImageBackground resizeMode='center' style={styles.l_jl_bg} source={require('../../assets/pages/home/jl.png')} >
                  <Text style={styles.l_jl_text}>36km</Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.r_c_date}>
              <Text style={styles.r_c_text}>2分钟前</Text>
            </View>
          </View>
          <View style={styles.city_content_container}>
            <View style={styles.c_l_flow}>
              <Image  style={styles.l_c_icon} source={require('../../assets/pages/home/icon.png')}/>
              <View style={styles.l_c_flow}>
                <Text style={styles.l_c_top_t}>拯救地球李小姐</Text>
                <Text style={styles.l_c_l_c}>有约着一起去爬山的吗？</Text>
                <ImageBackground resizeMode='center' style={styles.l_jl_bg} source={require('../../assets/pages/home/jl.png')} >
                  <Text style={styles.l_jl_text}>36km</Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.r_c_date}>
              <Text style={styles.r_c_text}>2分钟前</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
