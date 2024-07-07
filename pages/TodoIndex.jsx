import { TodoFilter } from "../cmps/TodoFilter.jsx"
import { TodoList } from "../cmps/TodoList.jsx"
import { DataTable } from "../cmps/data-table/DataTable.jsx"
import { todoService } from "../services/todo.service.js"
import { showErrorMsg, showSuccessMsg, showUserMsg } from "../services/event-bus.service.js"
import { loadTodos, saveTodo, removeTodo } from "../store/todo.actions.js"
import { SET_FILTER_BY } from "../store/store.js"

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM
const { useSelector, useDispatch } = ReactRedux

export function TodoIndex() {

    const todos = useSelector(state => state.todos)
    const filterBy = useSelector(state => state.filterBy)
    const dispatch = useDispatch()

    // Special hook for accessing search-params:
    const [searchParams, setSearchParams] = useSearchParams()

    const defaultFilter = todoService.getFilterFromSearchParams(searchParams)

    // const [filterBy, setFilterBy] = useState(defaultFilter)

    useEffect(() => {
        setSearchParams(filterBy)
        loadTodos(filterBy)
            .catch(err => {
                console.eror('err:', err)
                showErrorMsg('Cannot load todos')
            })
    }, [filterBy])

    function setFilterBy(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }

    function onRemoveTodo(todoId) {
        var text
        if (confirm('Are You sure you want to delete?') === true) {
            text = 'You pressed OK!,item deleted'
            console.log(text)
            removeTodo(todoId)
                .catch(err => {
                    console.log('err:', err)
                    showErrorMsg('Cannot remove todo ' + todoId)
                })
        } else {
            text = 'You canceled!'
            console.log(text)
        }
    }

    function onToggleTodo(todo) {
        const todoToSave = { ...todo, isDone: !todo.isDone }
        saveTodo(todoToSave)
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot toggle todo ' + todo)
            })
    }

    if (!todos) return <div>Loading...</div>
    return (
        <section className="todo-index">
            <TodoFilter filterBy={filterBy} onSetFilterBy={setFilterBy} />
            <div>
                <Link to="/todo/edit" className="btn" >Add Todo</Link>
            </div>
            <h2>Todos List</h2>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
            <hr />
            <h2>Todos Table</h2>
            <div style={{ width: '60%', margin: 'auto' }}>
                <DataTable todos={todos} onRemoveTodo={onRemoveTodo} />
            </div>
        </section>
    )
}