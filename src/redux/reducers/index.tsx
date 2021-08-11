import { combineReducers } from 'redux'
import { rootCom, RootNavigation } from '../../navigation/AppNavigation'
import theme from './theme'

const navState = RootNavigation.router.getStateForAction(RootNavigation.router.getActionForPathAndParams(rootCom))

const navReducer = (state = navState, action: any) => {
  const nextState = RootNavigation.router.getStateForAction(action, state)
  return nextState || state
}

const root = combineReducers({
  nav: navReducer,
  theme: theme
})

export default root
