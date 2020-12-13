import * as React from 'react'
import filmlogo from '../camera-reels-fill-white.svg'

export const Nav = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="#" className="navbar-brand">MovieRatings</a><img src={filmlogo} alt=""/>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarmenu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/About" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}