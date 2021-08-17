import React from 'react'
import styles from '../styles/goBack'
import { View, TouchableOpacity, Image } from 'react-native'
import { NavigationUtil } from '../navigation/NavigationUtil'
const Navigate = require('../assets/base/back.png')

const GoBack = (props: { navigation: any }) => {
  return (
    <View style={styles.leftWrapContainer}>
      <TouchableOpacity activeOpacity={1} onPress={() => NavigationUtil.goBack(props.navigation)}>
        <View style={styles.leftGoBackIcon}>
          <Image style={styles.icon} source={Navigate} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export { GoBack }
