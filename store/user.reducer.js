import { todoService } from '../services/todo.service.js'
import { userService } from '../services/user.service.js'
// const { createStore } = Redux

export const SET_USER = 'SET_USER'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'

const initialState = {
    user: userService.getLoggedinUser(),
    balance: userService.getLoggedinUser() ? userService.getLoggedinUser().balance : 0,
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.user }
        case UPDATE_BALANCE:
            return { ...state, balance: action.balance + 10 }
        default:
            return state
    }

}
// export const store = createStore(userReducer)