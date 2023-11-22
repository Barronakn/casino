import React from 'react';
import header_img from '../../../public/assets/bg_main.jpg';

const Header = () => {
    return (
        <header className='relative -z-10 top-0'>
            <div>
                <img className='pointer-events-none' loading='lazy' src={header_img} alt="header-img" />
            </div>
        </header>
    );
};

export default Header;
