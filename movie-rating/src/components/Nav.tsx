import * as React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    const navStyle = {
        color: 'white'
    };
    return(
        <nav className="navbar navbar-light navbar-expand-lg bg-dark scrolling-navbar">
            <h3 className="">Rate The Movie</h3>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportContent" 
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <Link to='/About'>
                        <li className="nav-item active">About</li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item">Logout</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}