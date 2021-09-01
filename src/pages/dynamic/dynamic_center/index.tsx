import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import { GoBack } from '../../../utils/goBack'

const cData = [{ icon: require('../../../assets/pages/dynamic/c1.png') }, { icon: require('../../../assets/pages/dynamic/c2.png') }, { icon: require('../../../assets/pages/dynamic/c3.png') }]

const DynamicCenter = (props: any) => {
  const { data } = props.navigation.state.params
  return (
    <ImageBackground style={styles.center_container} source={require('../../../assets/pages/dynamic/centerw.png')}>
      <SafeAreaView style={styles.scrollview}>
        <TopNavigationBar leftButton={GoBack(props, true)} title='个人界面' />
        <ImageBackground style={styles.center_avatar_flow} source={require('../../../assets/pages/dynamic/centert.png')}>
          <View style={styles.center_avatar_top_flow}>
            <Image style={styles.center_avatar_icon} source={require('../../../assets/pages/dynamic/a1.png')} />
            <View style={styles.center_avatar_name_flow}>
              <Text style={styles.center_avatar_name_text}>{data.title}</Text>
              <Text style={styles.center_avatar_name_desc}>{data.address}</Text>
            </View>
          </View>
          <View style={styles.center_fans_flow}>
            {data.gzlist.map((gz: any) => (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text>{gz.num}</Text>
                <Text>{gz.text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.center_avatar_tips}>
            <Text style={styles.center_avatar_tips_text}>{data.archives}</Text>
          </View>
        </ImageBackground>
        <ScrollView style={styles.scrollview}>
          <View style={styles.center_content_line_wrapper}>
            <View style={styles.center_line} />
            <Text style={styles.center_line_text}>运动档案</Text>
          </View>
          <ImageBackground style={styles.center_content_file} source={require('../../../assets/pages/dynamic/file.png')}>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>1007</Text>
              <Text style={styles.file_text}>总共量</Text>
            </View>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>1045</Text>
              <Text style={styles.file_text}>本月里程</Text>
            </View>
            <View style={styles.center_file_flow}>
              <Text style={styles.file_title}>369</Text>
              <Text style={styles.file_text}>总天数</Text>
            </View>
          </ImageBackground>
          <View style={styles.center_content_line_wrapper}>
            <View style={styles.center_line} />
            <Text style={styles.center_line_text}>运动档案</Text>
          </View>
          <View style={styles.center_file_content}>
            <View style={styles.center_file_content_flow}>
              <Text style={styles.file_date}>2021.09</Text>
              <View style={styles.file_content}>
                <Text style={styles.file_content_left}>13</Text>
                <Text style={styles.file_content_right}>无论你是一位初跑者，还是一位资深跑者，跑步 对我们的身心健康有着重大的影响，低血糖患者 可以跑步</Text>
              </View>
              <View style={styles.file_content_img_wrapper}>
                {cData.map((i, idx) => (
                  <Image style={styles.file_content_img} source={i.icon} key={idx} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={.8} style={styles.dy_follow_wrapper}>
          <ImageBackground style={styles.dy_follow} source={require('../../../assets/pages/discovery/follow.png')}>
            <Text>关注</Text>
          </ImageBackground>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default DynamicCenter
