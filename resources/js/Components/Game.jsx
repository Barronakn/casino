import React from 'react';
import GameList from './GameList';
import { Link } from '@inertiajs/react';
import Licensings from './Licensings';

const Game = () => {
    return (
        <section id='game' className='bg-[#1b0905] py-20 relative'>
            <div className='flex justify-center items-center'>
                <Link href='#' className='absolute -top-7 bg-white px-14 py-3 link_hover cursor-pointer text-center uppercase text-xl'>Play now</Link>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl max-[768px]:text-3xl font-bold'>Our Casino Games</h1>
                <span className='w-96 max-[768px]:w-[100px] h-0.5 bg-white'></span>
            </div>
            <GameList />
            <Licensings />
        </section>
    );
};

export default Game;
