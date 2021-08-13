/*
 * @Author: 执念
 * @Date: 2021-08-11 13:40:03
 * @LastEditTime: 2021-08-13 21:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /KeepSports/src/navigation/DynamicTabNavigator.tsx
 */
import { connect } from 'react-redux'
import { Image } from 'react-native'
import React, { Component } from 'react'
import { createAppContainer, BottomTabBar, createBottomTabNavigator } from 'react-navigation'

import Home from '../pages/home'
import Discovery from '../pages/discovery'
import Information from '../pages/information'
import Dynamic from '../pages/dynamic'
import Mine from '../pages/mine'

const TABS = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/home.png')} selectedImage={require('../assets/tab/ac_home.png')} />
      }
    }
  },
  Discovery: {
    screen: Discovery,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/discovery.png')} selectedImage={require('../assets/tab/ac_discovery.png')} />
      }
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/message.png')} selectedImage={require('../assets/tab/ac_message.png')} />
      }
    }
  },
  Dynamic: {
    screen: Dynamic,
    navigationOptions: {
      tabBarLabel: '动态',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/dynamic.png')} selectedImage={require('../assets/tab/ac_dynamic.png')} />
      }
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => {
        return <TabBarItem tintColor={tintColor} focused={focused} normalImage={require('../assets/tab/message.png')} selectedImage={require('../assets/tab/ac_message.png')} />
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
    const { Home, Discovery, Information, Dynamic, Mine } = TABS
    const tabs = { Home, Discovery, Information, Dynamic, Mine }
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
