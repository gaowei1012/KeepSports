import React from 'react'
import { BackHandler, Platform, ToastAndroid, SafeAreaView } from 'react-native'
import { NavigationUtil } from '../../navigation/NavigationUtil'
import DynamicTabNavigator from '../../navigation/DynamicTabNavigator'

class Index extends React.Component<any, any> {
  lastBackPressed: number | undefined
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    }
  }

  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        this.props.navigation.goBack()
        return true
      }
      this.lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
      return true
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    }
  }

  render() {
    // 保存 navigation
    NavigationUtil.navigation = this.props.navigation
    return  <DynamicTabNavigator />
  }
}

export default Index
