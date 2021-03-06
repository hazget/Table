import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
export const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">Users Table</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to='/Table'>Table</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Exit</a></li>
            
          </ul>
        </div>
      </nav>
    )

}
