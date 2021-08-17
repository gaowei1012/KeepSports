import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/discovery'

const DiscoveryData: any = [
  { icon: require('../../assets/pages/discovery/l_icon.png'), title: '我的目标', r_icon: require('../../assets/pages/discovery/l.png'), desc: '已定制20项' },
  { icon: require('../../assets/pages/discovery/r_icon.png'), title: '我的团队', r_icon: require('../../assets/pages/discovery/r.png'), desc: '已加入五项' }
]

const Discovery = () => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={'发现'} statusBar={statusbar} style={{ backgroundColor: '#ffffff' }} />
      <View style={styles.discovery_top_container}>
        <View style={styles.discovery_top_flow}>
          {DiscoveryData.map((item: { icon: any; r_icon: any; title: string; desc: string }) => (
            <ImageBackground style={styles.discovery_top_bg} source={item.icon}>
              <View style={styles.discovery_content_flow}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
                <Image style={styles.icon} source={item.r_icon} />
              </View>
            </ImageBackground>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discovery
