import React from 'react'
import styles from '../styles/goBack'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { NavigationUtil } from '../navigation/NavigationUtil'
const Navigate = require('../assets/base/back.png')

const GoBack = (props: { navigation: any}, bol: boolean ) => {
  return (
    <View style={styles.leftWrapContainer}>
      <TouchableOpacity activeOpacity={1} onPress={() => NavigationUtil.goBack(props.navigation)}>
        <View style={styles.leftGoBackIcon}>
          {bol?<Image style={styles.icon} source={Navigate} /> : <Text>取消</Text>}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export { GoBack }
