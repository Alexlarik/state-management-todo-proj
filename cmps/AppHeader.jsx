const { useState } = React
const { Link, NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

import { userService } from '../services/user.service.js'
import { UserMsg } from "./UserMsg.jsx"
import { LoginSignup } from './LoginSignup.jsx'
import { showErrorMsg } from '../services/event-bus.service.js'
import { logOut, login } from '../store/user.actions.js'
const { useSelector, useDispatch } = ReactRedux


export function AppHeader() {
    const navigate = useNavigate()
    // const [user, setUser] = useState(userService.getLoggedinUser())
    var user = useSelector(state => state.user)
    const dispatch = useDispatch()

    function onLogout() {
        logOut()
            .then(() => {
                showSuccessMsg('Logged out')
            })
            .catch((err) => {
                showErrorMsg(`OOPs try again `)
            })
    }

    // function onSetUser(user) {
    //     setUser(user)
    //     navigate('/')
    // }
    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Todo App</h1>
                {user ? (
                    < section className='user-info' >

                        <Link to={`/user/${user}`}>Hello {user.fullname}</Link>
                        <p> Balance: {user.balance}</p>
                        <button onClick={onLogout}>Logout</button>
                    </ section >
                ) : (
                    <section>
                        <LoginSignup />
                    </section>
                )}
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/todo" >Todos</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </nav>
            </section>
            <UserMsg />
        </header>
    )
}
