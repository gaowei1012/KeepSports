import React from 'react'
import { styles } from '../../styles/components/bottom'
import { TouchableOpacity, Text, ButtonProps } from 'react-native'

interface IBottomType extends ButtonProps {
  text: string
  propStyles?: any
}

const Bottom = (props: IBottomType) => {
  const { text, propStyles } = props

  return (
    <TouchableOpacity
      style={[styles.bottomContainer, propStyles]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Bottom
