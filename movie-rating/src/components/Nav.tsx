import * as React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return(
        <nav>
            <h3>Logo Here</h3>
            <ul>
                <Link to='/About'>
                    <li>About</li>
                </Link>
                <Link to='/'>
                    <li>Logout</li>
                </Link>
            </ul>
        </nav>
    )
}