import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://cdn.shopify.com/s/files/1/2412/7455/products/de-ma20-r-m_1024x1024.png?v=1623689901'} alt={'Lighthouse image'}/>
        </header>
    );
};

export default Header;