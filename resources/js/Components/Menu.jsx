import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Menu = () => {

    const { url } = usePage();
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Game", url: "/#game" },
        { name: "Our customer", url: "/#customer" },
        { name: "Contact", url: "/#contact" },
    ];

    return (
        <nav>
            <ul className='flex gap-10 items-center text-white'>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <Link className={url === link.url ? "active text-black" : "text-white hover:text-black max-[425px]:text-[14px]"} href={link.url}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Menu;
