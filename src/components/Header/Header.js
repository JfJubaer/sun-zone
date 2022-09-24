import React from 'react';
import logo from '../../images/Logo.svg';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="">
            <img src={logo} alt="" />
            </div>
            <div className="">
                <a href="">Shop</a>
                <a href="">Orders</a>
                <a href="">Inventory</a>
                <a href="">About</a>

            </div>
        </div>
    );
};

export default Header;