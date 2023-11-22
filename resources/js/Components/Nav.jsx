import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Header from './Header';
import Login from './Login';


const Nav = () => {

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

    return (
        <div className='menu max-[920px]:hidden'>
            <div style={navbarStyle} className='nav-bar absolute max-[]: z-50 px-10 text-xl flex justify-between items-center w-full py-3 min-[1700px]:gap-[450px] min-[1700px]:w-auto'>
                <Logo />
                <Menu />

                <div className='flex gap-16 items-center'>
                    <Login />
                </div>
            </div>
            <Header />
        </div>
    );
};

export default Nav;
