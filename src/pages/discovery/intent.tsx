import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/intent'
import { GoBack } from '../../utils/goBack'
import { useState } from 'react'
const statusbar = {
  backgroundColor: '#DEF2EA',
  barStyle: 'dark-content'
}

const Intent = (props: any) => {
  const [edit, setEdit] = useState<boolean>(false)
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={GoBack(props, true)} title={'我的目标'} statusBar={statusbar} />
      <ScrollView>
        <ImageBackground source={require('../../assets/pages/discovery/list.png')} style={styles.intent_container}>
          <ImageBackground style={styles.intent_list_left} source={edit ? require('../../assets/pages/discovery/list_icon.png') : require('../../assets/pages/discovery/clist.png')}>
            <Text>1</Text>
            <Text>公里</Text>
          </ImageBackground>
          <View style={styles.intent_list_content}>
            <Text style={styles.date}>2</Text>
            <Text style={styles.date}>2</Text>
            <Text style={styles.date}>:</Text>
            <Text style={styles.date}>0</Text>
            <Text style={styles.date}>0</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setEdit(!edit)
            }}>
            <ImageBackground style={styles.intent_list_edit} source={edit ? require('../../assets/pages/discovery/edit.png') : require('../../assets/pages/discovery/save.png')}>
              <Text style={styles.intent_list_text}>{edit ? '编辑' : '确认'}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Intent
