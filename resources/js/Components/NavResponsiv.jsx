import React, { useEffect, useState } from 'react';
import arrowleft from "../../../public/assets/arrow-right.svg";
import Header from './Header';
import MenuIcon from './MenuIcon';
import Login from './Login';
import Logo from './Logo';
import { Link, usePage } from '@inertiajs/react';

const NavResponsiv = () => {

    const { url } = usePage();
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Game", url: "/#game" },
        { name: "Our customer", url: "/#customer" },
        { name: "Contact", url: "/#contact" },
    ];

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const navbarStyle = {
        position: scrollPosition > 0 ? "fixed" : "",
        background: scrollPosition > 0 ? "#bc883d" : "transparent",
    };

    //Apparution du menu
    const [click, setClick] = useState(false);


    let navbar = document.querySelector(".navbar");
    const handleClick = () => {
        setClick();
        navbar.classList.remove("-translateX-280");
        navbar.classList.add("translateX-0");
        navbar.classList.remove("hidden");
    }

    const handleClickRemove = () => {
        setClick(false);
        navbar.classList.remove("translateX-0");
        navbar.classList.add("-translateX-280");
        navbar.classList.add("hidden");
    }

    return (
        <div className='menu hidden max-[920px]:block'>
            <div style={navbarStyle} className='nav-bar absolute z-50 px-5 text-xl flex justify-between items-center w-full py-3 min-[1700px]:gap-[1350px] min-[1700px]:w-auto'>
                <Logo />

                <nav className='navbar -translateX-280 fixed left-0 top-0 pt-4 w-64 max-[425px]:w-[13rem] h-screen bg-white p-3 pl-6 cursor-pointer hidden'>
                    {
                        click ?? (
                            <ul className="flex flex-col">
                                <li onClick={handleClickRemove} className='relative mb-5 bg-black p-2 w-8 h-8 text-white left-44 hover:bg-[#bc883d] hover:cursor-pointer'>
                                    <img loading='lazy' className='-rotate-180 pointer-events-none' src={arrowleft} alt="arrow-left" />
                                </li>
                                {
                                    navLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link className={url === link.url ? "active text-black" : "text-white hover:text-black max-[425px]:text-[14px]"} href={link.url}>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                </nav>

                <div className='flex gap-16 items-center'>
                    <Login />
                    <MenuIcon handleClick={handleClick} />
                </div>
            </div>
            <Header />
        </div>
    );
};

export default NavResponsiv;
