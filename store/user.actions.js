import { userService } from '../services/user.service.js'
import { store, SET_USER } from './store.js'

export function signUp(creds) {
    return userService.signup(creds)
        .then(user => store.dispatch({ type: SET_USER, user }))
}

export function login(creds) {
    return userService.login(creds)
        .then(user => store.dispatch({ type: SET_USER, user }))
}

export function logOut(creds) {
    return userService.logout(creds)
        .then(user => store.dispatch({ type: SET_USER, user }))
}