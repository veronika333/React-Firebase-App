import React from 'react'; 
import { withRouter, NavLink } from 'react-router-dom';
import './header.css';
// withRouter givs access to the history object’s properties 
// it is higher-order component. It passes updated match, location, and history props 
// to the wrapped component whenever it renders

function Header() {
    return (
        <div className="nav">
            <div className="menu">
                <img src="/logo.png" alt="Veronika's Logo" className="logo" />
                <NavLink to="/" className="title">
                   Home
                </NavLink>
                <NavLink to="/new" className="link">
                    New
                </NavLink>
                <NavLink to="/popular" className="link">
                    Popular
                </NavLink>
                <NavLink to="/search" className="link">
Search
                </NavLink>
                <NavLink to="/create" className="link">
                    Submit
                </NavLink>
            </div>
            <div className="login">
                <NavLink to="/login" className="link">
                    Login
                </NavLink>
            </div>
        </div>
    )
}
export default withRouter(Header);