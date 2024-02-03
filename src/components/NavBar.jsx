import React from 'react'
import { Link } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { auth } from '../firebase-config'

function NavBar({setIsAuth, isAuth}) {

    const navigate = useNavigate();

    function signUserOut() {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/login")
        })
    }

    return (
        <nav id="navbar">
            <Link to="/">Home</Link>
            {isAuth&& <Link to="create/">Create New Post</Link>}
            {!isAuth && <Link to="login/">Login</Link>}
            {isAuth && <button onClick={signUserOut}>Log Out</button>}
        </nav>
    )
}

export default NavBar