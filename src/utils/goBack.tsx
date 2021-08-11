import React from 'react'
import styles from '../styles/goBack'
import { View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'
const Navigate = require('/assets/svg/navigate.svg')

const GoBack = (props: { navigation: any }) => {
  return (
    <View style={styles.leftWrapContainer}>
      <TouchableOpacity activeOpacity={1} onPress={() => NavigationUtil.goBack(props.navigation)}>
        <View style={styles.leftGoBackIcon}>
          <Navigate width={20} height={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GoBack
