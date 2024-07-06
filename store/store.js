import { todoService } from '../services/todo.service.js'
const { createStore } = Redux

export const SET_TODOS = 'SET_TODOS'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
    todos: [],
    filterBy: todoService.getDefaultFilter()
}

function appReducer(state = initialState, action = {}) {
    switch (action.type) {

        case SET_TODOS:
            return { ...state, todos: action.todos }

        case SET_FILTER_BY:
            return { ...state, filterBy: action.filterBy }

        default:
            return state
    }

}
export const store = createStore(appReducer)