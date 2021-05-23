
import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink tag provides additional props for navigation
// so NavLink used in place of Link tag

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense </NavLink>
            <NavLink to="/help" activeClassName="is-active">help </NavLink>
        </header>
    );
}

export default Header;
