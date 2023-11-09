import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <footer className='tertiaire text-center'>
            <div className='flex justify-center gap-20 py-10 mx-32'>
                <form className='w-3/5 w-100 text-gray-400' action="">
                    <h1 className='secondary_color text-2xl mb-10 uppercase font-bold'>Subscribe Now</h1>
                    <div className='flex justify-between gap-4 pb-3 border-b-1'>
                        <input className='border-none border-gray-400 w-100 bg-transparent w-full pl-0 placeholder:text-gray-400' type="email" name="email" id="email" placeholder='Enter your email' />
                        <input className='border-gray-400 border-2 rounded-3xl px-10 py-2 cursor-pointer text-gray-400 hover:bg-white' type="submit" value="submit" />
                    </div>
                </form>
                <div className='w-1/5 w-100'>
                    <h1 className='secondary_color text-2xl uppercase font-bold mb-5'>Links</h1>
                    <div>
                        <ul className='flex flex-col gap-2 text-gray-400'>
                            <li>
                                <Link className='secondary_color_hover' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='secondary_color_hover' href='#about'>About</Link>
                            </li>
                            <li>
                                <Link className='secondary_color_hover' href='#game'>Game</Link>
                            </li>
                            <li>
                                <Link className='secondary_color_hover' href='#customer'>Our customer</Link>
                            </li>
                            <li>
                                <Link className='secondary_color_hover' href='#contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/5 w-100'>
                    <h1 className='secondary_color text-2xl mb-5 uppercase font-bold'>Contact us</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
            </div>

            <div className='secondary'>
                <p className='text-center text-xl py-2'>
                    Copyright 2019 All Right Reserved By Free html Templates
                </p>
            </div>
        </footer>
    );
};

export default Footer;
