import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Logo from "../../../public/assets/logo.png";
import Menu_icon from "../../../public/assets/menu_icon.png";
import header_img from '../../../public/assets/bg_main.jpg';
import arrowleft from "../../../public/assets/arrow-right.svg";


const Nav = () => {
    //Apparution du menu
    const [click, setClick] = useState(false);


    const navbar = document.querySelector(".navbar");
    const handleClick = () => {
        setClick();
        navbar.classList.remove("-translateX-280");
        navbar.classList.add("translateX-0");

    }

    const handleClickRemove = () => {
        setClick(false);
        navbar.classList.remove("translateX-0");
        navbar.classList.add("-translateX-280");

    }

    return (
        <div className='menu'>
            <div className='absolute z-10 px-5 text-xl flex justify-between w-full pt-10'>
                <div className='logo'>
                    <Link href='/'>
                        <img loading='lazy' src={Logo} alt="logo-img" />
                    </Link>
                </div>


                <nav className='navbar -translateX-280 fixed left-0 top-0 pt-4 w-64 h-screen bg-white'>
                    {click ?? (<ul className="flex flex-col">
                        <li onClick={handleClickRemove} className='relative mb-5 bg-black p-2 w-8 h-8 text-white left-44 hover_primary hover:cursor-pointer'>
                            <img loading='lazy' className='-rotate-180' src={arrowleft} alt="arrow-left" />
                        </li>
                        <li className="active">
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#game'>Game</a>
                        </li>
                        <li>
                            <a href='#customer'>Our customer</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>)}
                </nav>


                <div className='flex gap-16 items-center'>
                    <div className='login'>
                        <Link className='px-8 py-2 rounded-3xl secondary hover:text-blue-700' href='#'>Login</Link>
                    </div>

                    <div onClick={handleClick} className="menu-icon cursor-pointer">
                        <img loading='lazy' src={Menu_icon} alt="menu-icon" />
                    </div>
                </div>
            </div>
            <header className='relative -z-10 top-0'>
                <div>
                    <img loading='lazy' src={header_img} alt="header-img" />
                </div>


            </header>
        </div>
    );
};

export default Nav;
