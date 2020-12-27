import * as React from 'react'
import filmlogo from '../camera-reels-fill-white.svg'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginBtn } from './LoginBtn'
import { LogoutBtn } from './LogoutBtn'

export const Nav = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    console.log(isAuthenticated);
    console.log(isLoading);
    console.log(user)
    React.useEffect(() => {
        const checkAuth = async () => {
            console.log("Authenticated: ", isAuthenticated)
        }
        if(!isLoading){
            checkAuth()
        }
    }, [isLoading])
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="/" className="navbar-brand">MovieRatings</a><img src={filmlogo} alt=""/>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarmenu">
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? 
                        <li className="nav-item"> 
                            <a className="nav-link">Logged as: {user.name}</a>
                        </li>: 
                        <h4></h4>
                    }
                    <li className="nav-item">
                        <a href="/About" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        {isAuthenticated ? <LogoutBtn/> : <LoginBtn/>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}