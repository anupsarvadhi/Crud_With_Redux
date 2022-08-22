import * as types from './ActionType'

const intialState = {
  users: [],
  user: {},
}

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
      }
    case types.DELETE_USER:
    case types.ADD_USER:
    case types.UPDATE_USER:
      return {
        ...state,
      }
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
