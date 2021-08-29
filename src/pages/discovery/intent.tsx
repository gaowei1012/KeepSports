/*
 * @Author: 执念
 * @Date: 2021-08-22 16:03:46
 * @LastEditTime: 2021-08-24 16:44:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/pages/discovery/intent.tsx
 */
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import { styles } from '../../styles/view-style/intent'
import { GoBack } from '../../utils/goBack'
const statusbar = {
  backgroundColor: '#DEF2EA',
  barStyle: 'dark-content',
  translucent: false,
  hidden: false
}

const Intent = (props: any) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [date_obj, setDateObj] = useState<any>({ dateO: '1', dateT: '2', dateS: '0', dateF: '0' })

  /**
    * useState({}) 赋值为对象时，改变值UI不会渲染，
    * 原因：对象改变值，值仍然指向之前的同一个内存地址。
    * 解决方案：使用对象深拷贝 Object.assign({}, obj)，改变内存地址即可
    */
  // 处理赋值问题
  const del_with = (key: string, value: any) => {
    const _obj = Object.assign({}, date_obj)
    _obj[key] = value
    setDateObj(_obj)
  }

  // 获取输入值
  const handle_date_o = (e: string) => {
    del_with('dateO', e)
  }
  const handle_date_t = (e: string) => {
    del_with('dateT', e)
  }
  const handle_date_s = (e: string) => {
    del_with('dateS', e)
  }
  const handle_date_f = (e: string) => {
    del_with('dateF', e)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={GoBack(props, true)} title={'我的目标'} statusBar={statusbar} />
      <ScrollView>
        <ImageBackground source={require('../../assets/pages/discovery/list.png')} style={styles.intent_container}>
          <ImageBackground style={styles.intent_list_left} source={edit ? require('../../assets/pages/discovery/list_icon.png') : require('../../assets/pages/discovery/clist.png')}>
            <Text>1</Text>
            <Text>公里</Text>
          </ImageBackground>
          {console.log('date_obj==>>', date_obj)}
          <View style={styles.intent_list_content}>
            {edit ? <TextInput style={styles.textinput} onChangeText={handle_date_o} autoFocus maxLength={1} /> : <Text style={styles.date}>{date_obj.dateO}</Text>}
            {edit ? <TextInput style={styles.textinput} onChangeText={handle_date_t} maxLength={1} /> : <Text style={styles.date}>{date_obj.dateT}</Text>}
            <Text style={styles.date}>:</Text>
            {edit ? <TextInput style={styles.textinput} onChangeText={handle_date_s} maxLength={1} /> : <Text style={styles.date}>{date_obj.dateO}</Text>}
            {edit ? <TextInput style={styles.textinput} onChangeText={handle_date_f} maxLength={1} /> : <Text style={styles.date}>{date_obj.dateF}</Text>}
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setEdit(!edit)
            }}>
            <ImageBackground style={styles.intent_list_edit} source={edit ? require('../../assets/pages/discovery/edit.png') : require('../../assets/pages/discovery/save.png')}>
              <Text style={styles.intent_list_text}>{edit ? '确认' : '编辑'}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Intent
