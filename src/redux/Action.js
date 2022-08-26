import axios from 'axios'
import * as types from './ActionType'

const getUsers = (users) => ({
  type: types.GET_USER,
  payload: users,
})

const userDeleted = () => ({
  type: types.DELETE_USER,
})

const userAdded = () => ({
  type: types.ADD_USER,
})
const singleUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
})
const userUpdate = () => ({
  type: types.UPDATE_USER,
})

export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      })
      .then((resp) => {
        dispatch(getUsers(resp.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      })
      .then((resp) => {
        dispatch(userDeleted())
        dispatch(loadUser())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      })
      .then((resp) => {
        dispatch(userAdded())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      })
      .then((resp) => {
        dispatch(singleUser(resp.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const updatUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      })
      .then((resp) => {
        dispatch(userUpdate())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
