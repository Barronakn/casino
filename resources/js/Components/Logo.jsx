import { Link } from '@inertiajs/react';
import React from 'react';
import LogoImg from "../../../public/assets/logo.png";

const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/'>
                <img className='pointer-events-none' loading='lazy' src={LogoImg} alt="logo-img" />
            </Link>
        </div>
    );
};

export default Logo;
