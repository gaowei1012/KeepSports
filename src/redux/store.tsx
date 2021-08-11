import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reduers from './reducers'
import { middleware } from '../navigation/AppNavigation'

const middlewares = [middleware, thunk, logger]

const store = createStore(reduers, applyMiddleware(...middlewares))

export default store
