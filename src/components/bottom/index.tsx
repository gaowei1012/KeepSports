import { styles } from '../../styles/components/bottom'
import { TouchableOpacity, Text, ButtonProps } from 'react-native'

interface IBottomType extends ButtonProps {
  text: string
  propStyles?: any
  activeOpacity: number
}

const Bottom = (props: IBottomType) => {
  const { text, propStyles, activeOpacity } = props

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.bottomContainer, propStyles]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Bottom
