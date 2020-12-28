import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export const LogoutBtn = () => {
    const { logout } = useAuth0();

    return (
        <a onClick={() => logout({ returnTo: window.location.origin })} className="nav-link">Log Out</a>
    );

}