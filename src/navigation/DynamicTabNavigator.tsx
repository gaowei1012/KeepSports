import { connect } from 'react-redux'
import { Image } from 'react-native'
import React, { Component } from 'react'
import { createAppContainer, BottomTabBar, createBottomTabNavigator } from 'react-navigation'

import Home from '../pages/home'
import Discovery from '../pages/discovery'
import Information from '../pages/information'

const TABS = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/me.png')} selectedImage={require('../assets/tab/me.png')} />
      }
    }
  },
  Discovery: {
    screen: Discovery,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/me.png')} selectedImage={require('../assets/tab/me.png')} />
      }
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/me.png')} selectedImage={require('../assets/tab/me.png')} />
      }
    }
  }
}

class DynamicTabNavigator extends Component {
  Tabs: any
  constructor(props: {} | Readonly<{}>) {
    super(props)
    console.disableYellowBox = true
  }

  _tabNavgator() {
    /// 如果有当前Tabs
    if (this.Tabs) {
      return this.Tabs
    }
    const { Home, Discovery, Information } = TABS
    const tabs = { Home, Discovery, Information }
    return (this.Tabs = createBottomTabNavigator(tabs, {
      tabBarComponent: (props) => {
        return <TabBarComponent {...props} theme={this.props.theme} />
      }
    }))
  }

  render() {
    // 保存navigation为了后面调用
    //console.log(this.props.navigation);
    const Tab = createAppContainer(this._tabNavgator())
    return <Tab />
  }
}

const TabBarItem = (props: any) => <Image style={{ tintColor: props.tintColor, width: 25, height: 25 }} source={props.focused ? props.selectedImage : props.normalImage} />

class TabBarComponent extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

export default connect(mapStateToProps)(DynamicTabNavigator)
