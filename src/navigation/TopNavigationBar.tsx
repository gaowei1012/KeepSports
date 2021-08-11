import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/topNavigationbar'
import { View, Text, StatusBar, ViewPropTypes } from 'react-native'

const StatusBarShape = {
  barStyle: PropTypes.oneOf(['light-content', 'default']),
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string
}

export default class NavigationBar extends React.Component<any, any> {
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element,
    translucent: PropTypes.bool, // 是否将状态栏设为透明
    color: PropTypes.string,
    fontSize: PropTypes.number,
    animated: PropTypes.bool // 状态栏动画
  }

  static defaultProps = {
    // transparent: false
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
      translucent: false,
      animated: true
    },
    color: '#333',
    fontSize: 16
  }

  render() {
    let { fontSize, color } = this.props
    let statusBar = !this.props.statusBar.hidden ? (
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar} />
      </View>
    ) : null
    let titleView = this.props.titleView ? (
      this.props.titleView
    ) : (
      <Text
        //ellipsizeMode="head"
        numberOfLines={1}
        style={[styles.title, { color: color, fontSize: fontSize }]}>
        {this.props.title}
      </Text>
    )
    let content = this.props.hide ? null : (
      <View style={styles.navBar}>
        <View style={styles.leftBtnBox}>{this.getButtonElement(this.props.leftButton)}</View>
        <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>{titleView}</View>
        <View style={styles.rightBtnBox}>{this.getButtonElement(this.props.rightButton)}</View>
      </View>
    )
    return (
      <View style={[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }

  /**
   * @param ele element 元素节点
   * @returns {*}
   */
  getButtonElement(ele: React.ReactElement) {
    return <View style={styles.navBarButton}>{ele ? ele : null}</View>
  }
}

export { NavigationBar }
