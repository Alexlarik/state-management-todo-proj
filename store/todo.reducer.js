import { todoService } from '../services/todo.service.js'
import { userService } from '../services/user.service.js'
// const { createStore } = Redux

export const SET_TODOS = 'SET_TODOS'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const REMOVE_TODO = 'REMOVE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'


const initialState = {
    todos: [],
    filterBy: todoService.getDefaultFilter(),
}

export function todoReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_TODOS:
            console.log('testing', action.todos);
            return { ...state, todos: action.todos }
        case SET_FILTER_BY:
            return { ...state, filterBy: action.filterBy }
        case REMOVE_TODO:
            console.log('working reducer')
            var todos = state.todos.filter(todo => todo._id !== action.todoId)
            return { ...state, todos }
        case ADD_TODO:
            console.log('workkkkk');
            return { ...state, todos: [...state.todos, action.todo] }
        case UPDATE_TODO:
            var todos = state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
            return { ...state, todos }
        default:
            return state
    }

}
// export const store = createStore(todoReducer)