import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import { GoBack } from '../../../utils/goBack'

const DynamicCenter = (props: any) => {
  return (
    <ImageBackground style={styles.center_container} source={require('../../../assets/pages/dynamic/centerw.png')}>
      <SafeAreaView>
        <TopNavigationBar leftButton={GoBack(props, true)} title='个人界面' />
        <ImageBackground style={styles.center_avatar_flow} source={require('../../../assets/pages/dynamic/centert.png')}>
          <View>
            <Image style={styles.center_avatar_icon} source={require('../../../assets/pages/dynamic/a1.png')} />
            <View style={styles.center_avatar_name_flow}>
              <Text style={styles.center_avatar_name_text}>拯救地球李小姐</Text>
              <Text style={styles.center_avatar_name_desc}>丰和路怡和花园</Text>
            </View>
          </View>
          <View style={styles.center_fans_flow}>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
              <View>
                <Text>100</Text>
                <Text>关注</Text>
              </View>
            </View>
        </ImageBackground>
        <View>
          <Text>DynamicCenter</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default DynamicCenter
