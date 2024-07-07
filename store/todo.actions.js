import { todoService } from '../services/todo.service.js'
import { SET_TODOS, REMOVE_TODO, UPDATE_TODO, ADD_TODO, store } from './store.js'

export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => store.dispatch({ type: SET_TODOS, todos }))
}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => store.dispatch({ type: REMOVE_TODO, todoId }))
}

export function saveTodo(todo) {
    const type = todo._id ? UPDATE_TODO : ADD_TODO

    return todoService.save(todo)
        .then(savedTodo => {
            store.dispatch({ type, todos: savedTodo })
            return savedTodo
        })
        .catch(err => {
            console.error('Error saving todo:', err)
            // throw err
        })
}
