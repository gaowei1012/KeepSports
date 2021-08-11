import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'

import Welcome from '../pages/welcome'
import Home from '../pages/home'
import Discovery from '../pages/discovery'
import Information from '../pages/information'
import Dynamic from '../pages/dynamic'

export const rootCom: string = 'Init'

const InitNavigator = createSwitchNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Discovery: {
    screen: Discovery,
    navigationOptions: {
      header: null
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      header: null
    }
  },
  Dynamic: {
    screen: Dynamic,
    navigationOptions: {
      header: null
    }
  }
})

export const RootNavigation: any = createAppContainer(
  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  })
)

export const middleware = createReactNavigationReduxMiddleware('root', (state: any) => state.nav)

const AppWithNavigationState: any = reduxifyNavigator(RootNavigation, 'root')

const mapStateToProps = (state: any) => ({
  state: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
