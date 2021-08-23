import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'

import Welcome from '../pages/welcome'
import Index from '../pages/index'
import Home from '../pages/home'
import Discovery from '../pages/discovery'
import Information from '../pages/information'
import Dynamic from '../pages/dynamic'
import Mine from '../pages/mine'
import OfficialInformation from '../pages/information/official'
import UserInformation from '../pages/information/user'
import Sports from '../pages/home/Sports'
import TargetDistance from '../pages/home/TargetDistance'
import Establish from '../pages/discovery/establish'
import CreateEstablish from '../pages/discovery/CreateEstablish'
import AddDynamic from '../pages/dynamic/add_dynamic'
import DynamicCenter from '../pages/dynamic/dynamic_center'
import PrivacyPolicy from '../pages/privacyPolicy'
import UserAgreement from '../pages/agreement'
import Intent from '../pages/discovery/intent'
import GroupInformation from '../pages/discovery/Information'
import Login from '../pages/login'
import Register from '../pages/register'
import MineInformation from '../pages/mine/MineInformation'

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
  Index: {
    screen: Index,
    navigationOptions: {
      header: null
    }
  },
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
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      header: null
    }
  },
  UserInformation: {
    screen: UserInformation,
    navigationOptions: {
      header: null
    }
  },
  OfficialInformation: {
    screen: OfficialInformation,
    navigationOptions: {
      header: null
    }
  },
  Sports: {
    screen: Sports,
    navigationOptions: {
      header: null
    }
  },
  TargetDistance: {
    screen: TargetDistance,
    navigationOptions: {
      header: null
    }
  },
  Establish: {
    screen: Establish,
    navigationOptions: {
      header: null
    }
  },
  AddDynamic: {
    screen: AddDynamic,
    navigationOptions: {
      header: null
    }
  },
  DynamicCenter: {
    screen: DynamicCenter,
    navigationOptions: {
      header: null
    }
  },
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      header: null
    }
  },
  UserAgreement: {
    screen: UserAgreement,
    navigationOptions: {
      header: null
    }
  },
  Intent: {
    screen: Intent,
    navigationOptions: {
      header: null
    }
  },
  CreateEstablish: {
    screen: CreateEstablish,
    navigationOptions: {
      header: null
    }
  },
  GroupInformation: {
    screen: GroupInformation,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  MineInformation: {
    screen: MineInformation,
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
