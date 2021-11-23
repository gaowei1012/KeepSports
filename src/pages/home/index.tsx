import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native'
import { styles } from '../../styles/view-style/home'
import { Bottom } from '../../components/index'
import { px2dp } from '../../utils/px2dp'
import Swiper from 'react-native-swiper'
import { LineChart } from '../../containers/charts'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import AsyncStorage from '@react-native-community/async-storage'
import { useState, useEffect } from 'react'
import { IGetUserInfo } from '../../interface/pages/user'
import UserModel from '../../models/user'
import RootToast from '../../utils/Toast'
import ChartData from '../../config/charts'

const { yearData, weekData, methodData } = ChartData
const bannerData: any[] = [
  { icon: require('../../assets/pages/home/banner.png'), id: 1 },
  { icon: require('../../assets/pages/home/banner.png'), id: 2 },
  { icon: require('../../assets/pages/home/banner.png'), id: 3 }
]

const dData = [
  {
    title: '拯救地球李小姐',
    desc: '有约着一起去爬山的吗？',
    date: '2分钟前',
    km: '36km',
    grade: '初级',
    icon: require('../../assets/pages/home/icon.png')
  },
  {
    title: '凡凡最帅',
    desc: '今天去跑不了，跑了5公里，满足。',
    date: '刚刚',
    km: '18km',
    grade: '高级',
    icon: require('../../assets/pages/home/icon2.png')
  },
  {
    title: '小柠檬精',
    desc: '今天要去爬华山，有没有要一起哒!',
    date: '3小时前',
    km: '36km',
    grade: '高级',
    icon: require('../../assets/pages/home/icon3.png')
  },
  {
    title: '王者归来',
    desc: '去健身馆锻炼下真心不错，整个人都有精神了。',
    date: '06/11',
    km: '21km',
    grade: '高级',
    icon: require('../../assets/pages/home/icon4.png')
  }
]

const tabs = [
  { id: 1, type: 1, name: '跑步' },
  { id: 2, type: 2, name: '健身' }
]

const dateData = [
  { id: 1, type: 1, name: '周' },
  { id: 2, type: 2, name: '月' },
  { id: 3, type: 3, name: '年' }
]

const Home = () => {
  const [top_menu, setTableMenu] = useState<number>(1)
  const [date, setDate] = useState<number>(1)
  const [username, setUserName] = useState<string>('暂未登录')
  const [chart_data, setChartData] = useState<any>(null)

  useEffect(() => {
    DeviceEventEmitter.addListener('login', (event: any) => {
      if (event.success == true) {
        setUserName(event.user)
        _getUserInfo()
      }
    })
  }, [])

  // 获取用户信息
  const _getUserInfo = async () => {
    const result: any = await AsyncStorage.getItem('UserInfo')
    if (JSON.parse(result) != '{}') {
      const data: IGetUserInfo = {
        username,
      }
      const { token } = JSON.parse(result)
      UserModel.getUserInfo(data, token)
        .then((res: any) => {
          if (res.data.code == 200) {
            setUserName(res.data.data.username)
          } else if (res.data.code == 401) {
            RootToast.showToast(res.data.msg)
          }
        })
        .catch(err => {
          RootToast.showToast(JSON.stringify(err))
        })
    }
  }

  // 切换年月
  const switchTabs = (name: string, type: number) => {
    setTableMenu(type)
  }
  const switchDateTabs = (date: number) => {
    setDate(date)
  }
  const hanlde_userinfo = () => {
    if (username == '暂未登录') {
      NavigationUtil.goPage({}, 'Login')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground style={styles.home_bg__container} source={require('../../assets/pages/home/home_bg.png')}>
          <SafeAreaView>
            <TouchableOpacity activeOpacity={1} onPress={hanlde_userinfo}>
              <View style={styles.home_title__container}>
                <Image style={styles.title__avatar} source={require('../../assets/pages/home/avatar.png')} />
                <View style={styles.title__flow}>
                  <Text style={styles.title__name}>{username}</Text>
                  {username == '暂未登录' ? <Text style={styles.title__desc}>暂无排名</Text> : <Text style={styles.title__desc}>北京运动达人</Text>}
                </View>
                {username !== '暂未登录' ? <Bottom
                  title=""
                  activeOpacity={1}
                  text='高级'
                  propStyles={{
                    marginLeft: px2dp(21),
                    marginTop: px2dp(-14)
                  }}
                  onPress={() => { }}
                /> : null}
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
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
        <View style={styles.home__content_container}>
          <View style={styles.home__container_tab}>
            {tabs.map((tab: { name: string; type: number }) => (
              <TouchableOpacity activeOpacity={1} style={styles.home__container_tab_flow} onPress={() => switchTabs(tab.name, tab.type)}>
                <Text style={[styles.tab_default, top_menu === tab.type ? styles.actionText : styles.noActionText]}>{tab.name}</Text>
                {top_menu == tab.type ? <Image style={styles.actionLine} source={require('../../assets/pages/home/sle.png')} resizeMode='center' /> : <View style={styles.noActionLine} />}
              </TouchableOpacity>
            ))}
          </View>
          {top_menu == 1 ? (
            <ImageBackground style={styles.home__sport_container} source={require('../../assets/pages/home/sports.png')}>
              <View style={styles.sport__flow}>
                <View style={styles.sport__left}>
                  <Text style={styles.today_step_count}>今日步数(步)</Text>
                  <Text style={styles.toady_step_num}>9050</Text>
                </View>
                <View style={styles.sport__right}>
                  <View style={styles.toady_step_wrapper}>
                    <Text style={styles.today_step_count}>今日目标(公里)</Text>
                    <Image style={styles.toady_step_edit} source={require('../../assets/pages/home/edit.png')} />
                  </View>
                  <Text style={styles.toady_step_num}>30090</Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'Sports')
                }}
                style={styles.start_exercise}>
                <Image style={styles.start_exercise_icon} source={require('../../assets/pages/home/yd.png')} />
                <Text style={styles.start_exercise__text}>开始运动</Text>
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            <ImageBackground style={styles.home__sport_container} source={require('../../assets/pages/home/sports.png')}>
              <View style={styles.sport__flow}>
                <View style={styles.sport__left}>
                  <Text style={styles.today_step_count}>今日步数(步)</Text>
                  <Text style={styles.toady_step_num}>9050</Text>
                </View>
                <View style={styles.sport__right}>
                  <View style={styles.toady_step_wrapper}>
                    <Text style={styles.today_step_count}>今日目标(公里)</Text>
                    <Image style={styles.toady_step_edit} source={require('../../assets/pages/home/edit.png')} />
                  </View>
                  <Text style={styles.toady_step_num}>30090</Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'Sports')
                }}
                style={styles.start_exercise}>
                <Image style={styles.start_exercise_icon} source={require('../../assets/pages/home/yd.png')} />
                <Text style={styles.start_exercise__text}>开始运动</Text>
              </TouchableOpacity>
            </ImageBackground>
          )}
        </View>
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
            <ImageBackground style={styles.l_icon__bg} source={require('../../assets/pages/home/i3.png')}>
              <Image style={styles.l_icon_min} source={require('../../assets/pages/home/tc.png')} />
            </ImageBackground>
            <Text style={styles.p_num}>620</Text>
            <Image style={styles.line} source={require('../../assets/pages/home/line.png')} />
            <Text style={styles.p_text}>同城排名</Text>
          </ImageBackground>
          <ImageBackground style={styles.leaderboard__image__bg} source={require('../../assets/pages/home/leaderboard.png')}>
            <ImageBackground style={styles.l_icon__bg} source={require('../../assets/pages/home/i2.png')}>
              <Image style={styles.l_icon_min} source={require('../../assets/pages/home/qb.png')} />
            </ImageBackground>
            <Text style={styles.p_num}>2061</Text>
            <Image style={styles.line} source={require('../../assets/pages/home/line.png')} />
            <Text style={styles.p_text}>全国排名</Text>
          </ImageBackground>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            NavigationUtil.goPage({}, 'HistoricalStatistics')
          }}
          style={styles.history_data_container}>
          <ImageBackground style={styles.history_data_bg} source={require('../../assets/pages/home/history_data.png')}>
            <View style={styles.history_data_charts_title}>
              <Text style={styles.history_dw_text}>单位/km</Text>
              <Text style={styles.history_title_text}>历史数据</Text>
              <View style={styles.history_date_wrapper}>
                {dateData.map((d: { type: number; name: string }) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => switchDateTabs(d.type)}
                    style={[date !== d.type ? styles.date_wrapper : styles.no_date_wrapper, d.type == 1 ? styles.no_date_wrapper_a : null, d.type == 3 ? styles.no_date_wrapper_c : null]}>
                    <Text style={[date !== d.type ? styles.date_text : styles.no_date_text]}>{d.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {date == 1 ? <LineChart data={weekData} /> : null}
            {date == 2 ? <LineChart data={methodData} /> : null}
            {date == 3 ? <LineChart data={yearData} /> : null}
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.city__container}>
          <View style={styles.city__top_title}>
            <View>
              <Text style={styles.city_top_text}>同城动态</Text>
              <Image style={styles.city_sle} source={require('../../assets/pages/home/sle.png')} resizeMode='center' />
            </View>
            <View style={styles.arrow_container}>
              <Text style={styles.arrow_text}>更多</Text>
              <Image resizeMode='center' style={styles.arrow} source={require('../../assets/pages/home/arrow.png')} />
            </View>
          </View>
          <View>
            {dData.map((d: any) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  NavigationUtil.goPage({}, 'DynamicDetail')
                }}
                style={styles.city_content_container}>
                <View style={styles.c_l_flow}>
                  <Image style={styles.l_c_icon} source={d.icon} />
                  <View style={styles.l_c_flow}>
                    <Text style={styles.l_c_top_t}>{d.title}</Text>
                    <Text style={styles.l_c_l_c}>{d.desc}</Text>
                    <ImageBackground resizeMode='center' style={styles.l_jl_bg} source={require('../../assets/pages/home/jl.png')}>
                      <Text style={styles.l_jl_text}>{d.km}</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.r_c_date}>
                  <Text style={styles.r_c_text}>{d.date}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
