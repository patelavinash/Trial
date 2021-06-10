import React from 'react';
import {Link } from 'react-router-dom'
const Menu = () =>
{
    return(
        <>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Headings">Headings</Link>
        </>
    );
};

export default Menu();