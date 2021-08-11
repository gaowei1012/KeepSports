import { Dimensions } from 'react-native'

const defaultWidth: number = 375

export const width = Dimensions.get('window').width

export const height = Dimensions.get('window').height

export const px2dp = (uiEleWidth: number) => {
  return (uiEleWidth * width) / defaultWidth
}
