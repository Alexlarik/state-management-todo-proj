import { todoService } from "../services/todo.service";
const { createStore } = Redux

export const SET_TODOS = 'SET_TODOS'

const initialState = {
    todos: []
}

function appReducer(state = initialState, action = {}) {
    switch (action.type) {

        case SET_TODOS:
            return { ...state, todos: action.todos }

        default:
            return state
    }

}
export const store = createStore(appReducer)