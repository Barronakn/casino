import React from 'react';
import { Link } from '@inertiajs/react';
import About_img from "../../../public/assets/imag.jpg";

const About = () => {
    return (
        <section id='about' className='bg-[#1b0905] py-20'>
            <div className='mx-32 max-[1140px]:mx-[50px]'>
                <ul className='flex justify-between bg-[#280e08] px-4 py-5 max-[1140px]:flex-wrap max-[1140px]:justify-center max-[1140px]:items-center max-[1140px]:gap-[25px]'>
                    <li>
                        <Link className='secondary_color uppercase text-2xl max-[1140px]:text-[15px]' href='#'>About spinit</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl max-[1140px]:text-[15px]' href='#'>our promotions</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl max-[1140px]:text-[15px]' href='#'>over 1000games</Link>
                    </li>
                    <li>
                        <Link className='secondary_color uppercase text-2xl max-[1140px]:text-[15px]' href='#'>our mobile app</Link>
                    </li>
                </ul>
            </div>
            <div className='about max-[768px]:flex-col flex justify-center pt-20 items-center gap-5'>
                <div className='max-[425px]:mx-[25px]'>
                    <img loading='lazy' className='secondary p-5 object-contain pointer-events-none' src={About_img} alt="About_img" />
                </div>
                <div className='text-white w-1/2 max-[425px]:w-full max-[425px]:px-10'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variati</p>
                    <p>ons of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
