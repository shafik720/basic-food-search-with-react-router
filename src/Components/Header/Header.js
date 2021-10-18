import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div>
            <NavLink to='/home' activeStyle={activeStyle} >Home</NavLink>
            <NavLink to='/about' activeStyle={activeStyle} >About</NavLink>
            <NavLink to='/contact' activeStyle={activeStyle} >Contact</NavLink>
            <NavLink to='/restaurant' activeStyle={activeStyle} >Restaurant</NavLink>
        </div>
    );
};

export default Header;