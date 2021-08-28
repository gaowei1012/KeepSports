import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/dynamic'

const dynamicData = [
  { title: '全部', type: 1 },
  { title: '好友', type: 2 },
  { title: '同城', type: 3 }
]

const _dylistData = [
  {
    title: '拯救地球李小姐',
    date: '57分钟前',
    content: '当一首歌突然好听，那一定多了一个故事#老照片#不忘初心，不负时光.',
    comment_name: '爱蹦跶的小猴子',
    comment: '哈哈哈，歌曲真的好治愈呦，烦恼的时 候在歌曲里真的可以找到答案',
    icon_list: [
      {
        icon: require('../../assets/pages/dynamic/i1.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i2.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i3.png')
      }
    ]
  },
  {
    title: '拯救地球李小姐',
    date: '57分钟前',
    content: '当一首歌突然好听，那一定多了一个故事#老照片#不忘初心，不负时光.',
    comment_name: '爱蹦跶的小猴子',
    comment: '哈哈哈，歌曲真的好治愈呦，烦恼的时 候在歌曲里真的可以找到答案',
    icon_list: [
      {
        icon: require('../../assets/pages/dynamic/i1.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i2.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i3.png')
      }
    ]
  },
  {
    title: '拯救地球李小姐',
    date: '57分钟前',
    content: '当一首歌突然好听，那一定多了一个故事#老照片#不忘初心，不负时光.',
    comment_name: '爱蹦跶的小猴子',
    comment: '哈哈哈，歌曲真的好治愈呦，烦恼的时 候在歌曲里真的可以找到答案',
    icon_list: [
      {
        icon: require('../../assets/pages/dynamic/i1.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i2.png')
      },
      {
        icon: require('../../assets/pages/dynamic/i3.png')
      }
    ]
  }
]

const Dynamic = () => {
  const [type, setType] = useState<number>(1)
  const [dylistData, setDylistData] = useState<any[]>(_dylistData)

  useEffect(() => {
    async function getStorage() {
      const res: any = await AsyncStorage.getItem('dynamic')


      const temp: any = [...dynamicData]
      temp.push(temp)
      //setDylistData(temp)
      console.log(JSON.parse(res))
    }
    getStorage()
  }, [])

  // 切换
  const switchTab = (type: number) => {
    setType(type)
  }

  // 添加
  const add_dynamic = () => {
    NavigationUtil.goPage({}, 'AddDynamic')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dynamic_top_switch}>
        {dynamicData.map((d) => (
          <TouchableOpacity activeOpacity={1} style={styles.dynamic_top_title} onPress={() => switchTab(d.type)}>
            <Text style={[type == d.type ? styles.action_title : styles.no_action_title]}>{d.title}</Text>
            {type == d.type ? <Image style={styles.dynamic_top_icon} source={require('../../assets/pages/dynamic/sle.png')} /> : <View style={styles.no_dynamic_top_icon} />}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.dynamic_content_scrollview}>
        <View style={styles.dynamic_content_flow__wrapper}>
          {dylistData.map((list) => (
            <View style={styles.dynamic_content_flow}>
              <View style={styles.dy_top_avatar_wrapper}>
                {/* 头像 */}
                <TouchableOpacity onPress={() => {
                  NavigationUtil.goPage({}, 'DynamicCenter')
                }} style={styles.dy_top_left_wrapper}>
                  <Image source={require('../../assets/pages/dynamic/a1.png')} style={styles.avatar} />
                  <View style={styles.avatar_right_wrapper}>
                    <Text style={styles.avatar_text}>{list.title}</Text>
                    <Text style={styles.avatar_desc}>{list.date}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageBackground source={require('../../assets/pages/dynamic/gz.png')} style={styles.dy_top_right_wrapper}>
                    <Image source={require('../../assets/pages/dynamic/add.png')} style={styles.dy_top_right_add} />
                    <Text style={styles.dy_top_right_add_text}>关注</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.dy_content_wrapper}>
                <Text>{list.content}</Text>
                <View style={styles.content_img_wrapper}>
                  {list.icon_list.map(img => (
                    <Image source={img.icon} style={styles.content_img}/>
                  ))}
                </View>
                <ImageBackground style={styles.dy_comment_new_icon} source={require('../../assets/pages/dynamic/pl.png')}>
                  <Text style={styles.dy_comment_text}>最新评论</Text>
                </ImageBackground>
                <ImageBackground style={styles.dy_comment_wrapper} source={require("../../assets/pages/dynamic/commentbg.png")}>
                  <Text style={styles.comment_name}>{list.comment_name}:</Text>
                  <Text style={styles.comment_content}>{list.comment}</Text>
                </ImageBackground>
              </View>
              <View style={styles.dy_bottom_wrapper}>
                <View style={styles.dy_flow}>
                  <Image style={styles.btn_icon} source={require('../../assets/pages/dynamic/dz.png')}/>
                  <Text style={styles.btn_text}>12</Text>
                </View>
                <Image style={styles.dy_line} source={require('../../assets/pages/dynamic/line.png')}/>
                <View style={styles.dy_flow}>
                  <Image style={styles.btn_icon} source={require('../../assets/pages/dynamic/ly.png')}/>
                  <Text style={styles.btn_text}>9</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={1} style={styles.btn_add} onPress={add_dynamic}>
        <ImageBackground style={styles.btn_add} source={require('../../assets/pages/dynamic/add_dy.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Dynamic
