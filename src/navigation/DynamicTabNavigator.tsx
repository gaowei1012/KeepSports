import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, BottomTabBar, createBottomTabNavigator } from 'react-navigation'
import styles from '../styles/dynamic'

import Home from '../pages/home'
import Discovery from '../pages/discovery'
import Information from '../pages/information'
// svg
const HomeSvg = require('../assets/tab/language.svg')
const SelHomeSvg = require('../assets/tab/ac-language.svg')
const FaMapSvg = require('../assets/tab/fa-map.svg')
const SelFaMapSvg = require('../assets/tab/ac-fa-map.svg')
const FaLemon = require('../assets/tab/fa-lemon.svg')
const SelFaLemon = require('../assets/tab/ac-fa-lemon.svg')

class DynamicTabNavigator extends Component {
  Tabs: any
  constructor(props: any) {
      super(props)
  }
  TABS = {
      Home: {
          screen: Home,
          navigationOptions: {
              tabBarLabel: '首页',
              tabBarIcon: (item: { tintColor: any; focused: any }) => {
                  return (
                      <TabBarItem
                          // tintColor={item.tintColor}
                          focused={item.focused}
                          selectedSvg={<SelHomeSvg />}
                          normalSvg={<HomeSvg />}
                      />
                  )
              },
          },
      },
      Discovery: {
          screen: Discovery,
          navigationOptions: {
              tabBarLabel: '发现',
              tabBarIcon: (item: { tintColor: any; focused: any }) => {
                  return (
                      <TabBarItem
                          // tintColor={item.tintColor}
                          focused={item.focused}
                          selectedSvg={<SelFaMapSvg />}
                          normalSvg={<FaMapSvg />}
                      />
                  )
              },
          },
      },
      Information: {
          screen: Information,
          navigationOptions: {
              tabBarLabel: '消息',
              tabBarIcon: (item: { tintColor: any; focused: any }) => {
                  return (
                      <TabBarItem
                          // tintColor={item.tintColor}
                          focused={item.focused}
                          selectedSvg={<SelFaLemon />}
                          normalSvg={<FaLemon />}
                          // isShowMessage={true}
                      />
                  )
              },
          },
      },
  }

  _tabNavgator() {
      /// 如果有当前Tabs
      if (this.Tabs) {
          return this.Tabs
      }
      const { Home, Discovery, Information } = this.TABS
      const tabs = { Home, Discovery, Information }
      // IndexPage.navigationOptions.tabBarLabel = '首页';
      return (this.Tabs = createBottomTabNavigator(tabs, {
          tabBarComponent: (props) => {
              return <TabBarComponent {...props} theme={this.props.theme.theme} />
          },
      }))
  }

  render() {
      // 保存navigation为了后面调用
      const Tab = createAppContainer(this._tabNavgator())
      return <Tab />
  }
}

const TabBarComponent = (props: any) => {
  return <BottomTabBar {...props} activeTintColor={props.theme} />
}

const TabBarItem = (props: { focused: any; selectedSvg: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; normalSvg: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return <View style={styles.tabBox}>{props.focused ? props.selectedSvg : props.normalSvg}</View>
}

export default connect(({theme}) => ({ theme }))(DynamicTabNavigator)
