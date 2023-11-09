import React from 'react';
import { Link } from '@inertiajs/react';
import About_img from "../../../public/assets/imag.jpg";

const About = () => {
    return (
        <section id='about' className='tertiaire py-20'>
            <div className='mx-32'>
                <ul className='flex justify-between bg-red-10 px-4 py-5'>
                    <li>
                        <Link className='secondary_color uppercase text-2xl' href='#'>About spinit</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl' href='#'>our promotions</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl' href='#'>over 1000games</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl' href='#'>our mobile app</Link>
                    </li>
                </ul>
            </div>
            <div className='about flex justify-center pt-20 items-center gap-5'>
                <div>
                    <img loading='lazy' className='secondary p-5 object-contain' src={About_img} alt="About_img" />
                </div>
                <div className='text-white w-1/2 w-100 w-45'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variati</p>
                    <p>ons of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
