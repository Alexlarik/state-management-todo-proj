import { TodoPreview } from "./TodoPreview.jsx"
const { Link } = ReactRouterDOM
import { loadTodos, saveTodo, removeTodo } from "../store/todo.actions.js"
const { useSelector } = ReactRedux

export function TodoList({ onToggleTodo, onRemoveTodo }) {
    const todos = useSelector(state => state.x.todos)
    console.log('Todos in TodoList:', todos)

    // function handleChange({ target }) {
    //     const { name: field, value } = target
    //     setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    // }
    function onColorChange(ev, todo) {
        console.log('Event target name:', ev.target.name)
        console.log('Event target value:', ev.target.value)
        console.log('Todo object:', todo)
        const target = ev.target.name
        var value = ev.target.value
        const updatedTodo = { ...todo, [target]: value }
        saveTodo(updatedTodo)
            .catch(err => {
                console.error('Error updating todo:', err)
            })
    }

    return (
        <ul className="todo-list">
            {todos.map(todo =>
                <li key={todo._id} style={{ backgroundColor: todo.color }}>
                    <TodoPreview todo={todo} onToggleTodo={() => onToggleTodo(todo)} />
                    <section>
                        <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
                        <button><Link to={`/todo/${todo._id}`}>Details</Link></button>
                        <button><Link to={`/todo/edit/${todo._id}`}>Edit</Link></button>
                        <div>Color:</div>
                        <input type="color" name="color" id="todo-color" value={todo.color} onChange={(ev) => onColorChange(ev, todo)} />
                    </section>
                </li>
            )}
        </ul>
    )
}