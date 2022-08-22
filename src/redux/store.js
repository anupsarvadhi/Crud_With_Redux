import { applyMiddleware } from 'redux'
import { createStore } from 'redux'
import RootReducer from './RootReducer'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewere = [reduxThunk]

if (process.env.NODE_ENV === 'development') {
  middlewere.push(logger)
}

const store = createStore(RootReducer, applyMiddleware(...middlewere))

export default store
