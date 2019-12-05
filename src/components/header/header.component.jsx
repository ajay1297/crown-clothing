import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss';
import {ReactComponent as Logo } from '../../assests/crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' tp='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;