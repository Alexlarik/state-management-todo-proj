import { todoService } from '../services/todo.service.js'
import { ADD_TODO, REMOVE_TODO, SET_TODOS, UPDATE_TODO } from './todo.reducer.js'
import { store } from './store.js'
// import { SET_TODOS, REMOVE_TODO, UPDATE_TODO, ADD_TODO, store } from './todo.reducer.js'

export function loadTodos(filterBy) {
    // console.log('Loading todos with filter:', filterBy)
    return todoService.query(filterBy)
        .then(todos => {
            console.log('Loaded todos:', todos)
            store.dispatch({ type: SET_TODOS, todos })
        })
        .catch(err => {
            console.error('Error loading todos:', err)
            throw err
        })
}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => store.dispatch({ type: REMOVE_TODO, todoId }))
}

export function saveTodo(todo) {
    console.log('hi bye 223232')
    const type = todo._id ? UPDATE_TODO : ADD_TODO

    return todoService.save(todo)
        .then(newTodo => {
            console.log(newTodo)
            store.dispatch({ type, todo: newTodo })
            return newTodo
        })
        .catch(err => {
            console.error('Error saving todo:', err)
            // throw err
        })
}
