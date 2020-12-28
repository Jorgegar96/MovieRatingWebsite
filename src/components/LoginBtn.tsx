import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export const LoginBtn = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <a onClick={() => loginWithRedirect()} className="nav-link">Log In</a>
    );

}