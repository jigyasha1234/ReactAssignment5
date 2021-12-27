import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav>
                <h3>Logo</h3>
                <ul className='Nav-links'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/posts'>
                        <li>Posts</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
export default Nav