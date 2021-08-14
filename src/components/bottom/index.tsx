import React from 'react'
import { styles } from '../../styles/components/bottom'
import { TouchableOpacity, Text } from 'react-native'

interface IBottomType {
  text: string
  activeOpacity?: number
  onPress: () => void
  propStyles?: any
}

const Bottom = (props: IBottomType) => {
  const { text, onPress, propStyles, activeOpacity } = props

  return (
    <TouchableOpacity
      style={[styles.bottomContainer, propStyles]}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Bottom
