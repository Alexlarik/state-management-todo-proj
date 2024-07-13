import { userService } from '../services/user.service.js'
import { SET_USER, UPDATE_BALANCE } from './user.reducer.js'
import { store } from './store.js'
// import { store, SET_USER, UPDATE_BALANCE } from './user.reducer.js'

export function signUp(creds) {
    return userService.signup(creds)
        .then(user => store.dispatch({ type: SET_USER, user }))
}

export function login(creds) {
    return userService.login(creds)
        .then(user => store.dispatch({ type: SET_USER, user }))
}

export function logOut() {
    return userService.logout()
        .then(user => store.dispatch({ type: SET_USER, user: null }))
}

export function onUpdateBalance(user) {
    return userService.updateBalance(user)
        .then(() => store.dispatch({ type: UPDATE_BALANCE }))
}
