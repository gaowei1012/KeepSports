import React from 'react'
import { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { styles } from '../../styles/view-style/targetdistance'
import { GoBack } from '../../utils/goBack'
const statusbar = {
  backgroundColor: '#fff',
  barStyle: 'dark-content'
}

const jldata = [
  { sum: 1.0, type: 1, c: '' },
  { sum: 2.0, type: 2, c: '' },
  { sum: 3.0, type: 3, c: '' },
  { sum: 5.0, type: 4, c: '' },
  { sum: 8.0, type: 5, c: '' },
  { sum: 10.0, type: 6, c: '' },
  { sum: 12.0, type: 7, c: '' },
  { sum: 21.0975, type: 8, c: '半马' },
  { sum: 42.195, type: 9, c: '全马' }
]

const TargetDistance = (props: any) => {
  const [default_type, setDefaultType] = useState<number>(1)
  const switchTab = (type: number) => {
    setDefaultType(type)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='设定距离目标' statusBar={statusbar} leftButton={GoBack(props, true)} style={{ backgroundColor: '#fff' }} />
      <View style={styles.content}>
        <View style={styles.target_top_jl}>
          <Text style={styles.target_top_sum}>0.80</Text>
          <Text style={styles.target_top_text}>距离步行公里</Text>
        </View>
        <View style={styles.target_content}>
          {jldata.map((j) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => switchTab(j.type)}>
              <ImageBackground source={`${default_type !== j.type ? require('../../assets/pages/sports/nxz.png') : require('../../assets/pages/sports/xz.png')}`} style={styles.target_content_bg}>
                {j.sum > 20 ? (
                  <ImageBackground style={styles.tl} source={require('../../assets/pages/sports/tl.png')}>
                    <Text style={styles.c}>{j.c}</Text>
                  </ImageBackground>
                ) : null}
                <Text style={[default_type !== j.type ? styles.target_sum_text : styles.ac_target_sum_text]}>{j.sum}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.target_c} onPress={() => {}}>
          <Text style={styles.target_c_text}>确定</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default TargetDistance
