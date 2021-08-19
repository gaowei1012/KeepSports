import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil  } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/discovery'
const statusbar = {
  backgroundColor: '#FAFAFA',
  barStyle: 'dark-content'
}

const DiscoveryData: any = [
  { icon: require('../../assets/pages/discovery/l_icon.png'), title: '我的目标', r_icon: require('../../assets/pages/discovery/l.png'), desc: '已定制20项' },
  { icon: require('../../assets/pages/discovery/r_icon.png'), title: '我的团队', r_icon: require('../../assets/pages/discovery/r.png'), desc: '已加入五项' }
]

const DiscoveryContentData: any = [
  { icon: require('../../assets/pages/discovery/js.png'), icon_b: require('../../assets/pages/discovery/mb.png'), desc: '山西健身体操团队' },
  { icon: require('../../assets/pages/discovery/js.png'), icon_b: require('../../assets/pages/discovery/mb.png'), desc: '山西健身体操团队' },
  { icon: require('../../assets/pages/discovery/js.png'), icon_b: require('../../assets/pages/discovery/mb.png'), desc: '山西健身体操团队' },
  { icon: require('../../assets/pages/discovery/js.png'), icon_b: require('../../assets/pages/discovery/mb.png'), desc: '山西健身体操团队' }
]

const Discovery = () => {

  // 创建团队
  const establish = (title: string) => {
    if (title == '我的团队') {
      NavigationUtil.goPage({}, "Establish")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={'发现'} statusBar={statusbar} style={{ backgroundColor: '#FAFAFA' }} />
      <ScrollView>
        <View style={styles.discovery_top_container}>
          <View style={styles.discovery_top_flow}>
            {DiscoveryData.map((item: { icon: any; r_icon: any; title: string; desc: string }) => (
              <TouchableOpacity onPress={() => establish(item.title)} style={styles.discovery_top_bg}>
                <ImageBackground style={styles.discovery_top_bg} source={item.icon}>
                  <View style={styles.discovery_content_flow}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.desc}>{item.desc}</Text>
                    </View>
                    <Image style={styles.icon} source={item.r_icon} />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.discovery_content}>
          <View style={styles.content_flow}>
            <View style={styles.t_image_flow}>
              <Text style={styles.td_text}>附近团队</Text>
              <Image style={styles.wx} source={require('../../assets/base/wx.png')} />
            </View>
            <View style={styles.more_flow}>
              <Text style={styles.more_text}>更多</Text>
              <Image style={styles.more_image} source={require('../../assets/base/arrow.png')} />
            </View>
          </View>
        </View>
        <View style={styles.bottom_content}>
          {DiscoveryContentData.map((item: { icon: any; icon_b: any; desc: string }) => (
            <TouchableOpacity>
              <ImageBackground style={styles.bottom_content_flow} source={item.icon}>
                <ImageBackground style={styles.bottom_content_c} source={item.icon_b}>
                  <Text style={styles.b_c_desc}>{item.desc}</Text>
                </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discovery
