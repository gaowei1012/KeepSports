/*
 * @Author: 执念
 * @Date: 2021-08-23 21:59:05
 * @LastEditTime: 2021-08-24 16:49:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/home/DynamicDetail.tsx
 */
import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { CircularProgress, Dial } from '../../components/circle/index'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/home'
import { GoBack } from '../../utils/goBack'
import { ScrollView } from 'react-navigation'
import { height } from '../../utils/px2dp'

const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}
const dylistData = [
  {
    title: '拯救地球李小姐',
    date: '57分钟前',
    content: '当一首歌突然好听，那一定多了一个故事#老照片#不忘初心，不负时光.',
    comment_name: '爱蹦跶的小猴子',
    comment: '哈哈哈，歌曲真的好治愈呦，烦恼的时 候在歌曲里真的可以找到答案',
    icon_list: [
      {
        icon: require('../../assets/pages/dynamic/i1.png')
      }
    ]
  }
]
const commentData = [
  {
    icon: require('../../assets/pages/home/ca.png'),
    name: '小点点',
    title: '我要像你学习',
    date: 17
  },
  {
    icon: require('../../assets/pages/home/ca.png'),
    name: '小点点',
    title: '我要像你学习',
    date: 17
  },
  {
    icon: require('../../assets/pages/home/ca.png'),
    name: '小点点',
    title: '我要像你学习',
    date: 17
  },
  {
    icon: require('../../assets/pages/home/ca.png'),
    name: '小点点',
    title: '我要像你学习',
    date: 17
  },
  {
    icon: require('../../assets/pages/home/ca.png'),
    name: '小点点',
    title: '我要像你学习',
    date: 17
  }
]
const DynamicDetail = (props: any) => {
  return (
    <SafeAreaView style={styles.dynamic_content_cotainer}>
      <TopNavigationBar statusBar={statusbar} title='详情' leftButton={GoBack(props, true)} style={{ backgroundColor: '#fff' }} />
      <ScrollView>
        <View style={styles.dynamic_content_flow__wrapper}>
          {dylistData.map((list) => (
            <View style={styles.dynamic_content_flow}>
              <View style={styles.dy_top_avatar_wrapper}>
                {/* 头像 */}
                <TouchableOpacity
                  onPress={() => {
                    NavigationUtil.goPage({}, 'DynamicCenter')
                  }}
                  style={styles.dy_top_left_wrapper}>
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
                <ImageBackground style={styles.huati} source={require('../../assets/pages/home/huati.png')}>
                  <Text style={styles.huati_text}># 运动健身</Text>
                </ImageBackground>
                <View style={styles.content_img_wrapper}>
                  {list.icon_list.map((img) => (
                    <Image source={img.icon} style={styles.content_img} />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.dy_comment_wrapper}>
          <View style={styles.dy_comment_left}>
            <Text style={styles.dy_comment_left_title}>评论</Text>
            <Text style={styles.dy_comment_left_mun}>3320</Text>
          </View>
          <View style={styles.dy_comment_right}>
            <Text style={styles.dy_comment_left_title}>赞</Text>
            <Text style={styles.dy_comment_left_mun}>6679</Text>
          </View>
        </View>
        <View>
          {commentData.map(item => (
            <View style={styles.comment_content}>
              <View style={styles.comment_left_wrapper}>
                <Image style={styles.comment_icon} source={item.icon}/>
                <View style={styles.comment_left}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{item.date}分钟前</Text>
                </View>
              </View>
              <View style={styles.comment_content_icon_wrapper}>
                <Image style={styles.dy_comment_icon} source={require('../../assets/pages/home/msg.png')}/>
                <Image style={styles.dy_comment_icon} source={require('../../assets/pages/home/nlink.png')}/>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TextInput placeholder='请输入评论:' placeholderTextColor='#999999' style={styles.textinput} />
      <View style={styles.dy_comment_botton_wrapper}>
        <View style={styles.dy_comment_botton}>
          <Image style={styles.dy_comment_icon} source={require('../../assets/pages/home/link.png')} />
          <Text style={styles.dy_comment_num}>260</Text>
        </View>
        <View style={styles.dy_comment_botton}>
          <Image style={styles.dy_comment_icon} source={require('../../assets/pages/home/msg.png')} />
          <Text style={styles.dy_comment_num}>925</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DynamicDetail
