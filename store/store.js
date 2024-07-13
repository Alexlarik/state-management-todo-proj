import { todoService } from '../services/todo.service.js'
import { userService } from '../services/user.service.js'
import { todoReducer } from './todo.reducer.js'
import { userReducer } from './user.reducer.js'
const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
    x: todoReducer,
    y: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

// export const store = createStore(rootReducer)
window.gStore = store
// export const SET_TODOS = 'SET_TODOS'
// export const SET_FILTER_BY = 'SET_FILTER_BY'
// export const REMOVE_TODO = 'REMOVE_TODO'
// export const ADD_TODO = 'ADD_TODO'
// export const UPDATE_TODO = 'UPDATE_TODO'
// export const SET_USER = 'SET_USER'
// export const UPDATE_BALANCE = 'UPDATE_BALANCE'

// const initialState = {
//     todos: [],
//     filterBy: todoService.getDefaultFilter(),
//     user: userService.getLoggedinUser(),
//     balance: userService.getLoggedinUser() ? userService.getLoggedinUser().balance : 0,
// }

// function appReducer(state = initialState, action = {}) {
//     switch (action.type) {

//         case SET_TODOS:
//             return { ...state, todos: action.todos }

//         case SET_FILTER_BY:
//             return { ...state, filterBy: action.filterBy }
//         case REMOVE_TODO:
//             var todos = state.todos.filter(todo => todo._id !== action.todoId)
//             return { ...state, todos }
//         case ADD_TODO:
//             return { ...state, todos: [...state.todos, action.todo] }
//         case UPDATE_TODO:
//             var todos = state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
//             return { ...state, todos }
//         case SET_USER:
//             return { ...state, user: action.user }
//         case UPDATE_BALANCE:
//             return { ...state, balance: action.balance + 10 }
//         default:
//             return state
//     }

// }