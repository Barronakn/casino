import React from 'react';

const GameList = ({ id, image }) => {
    return (
        <div className='relative secondary w-80'>
            <div className='p-4 flex flex-col justify-center items-center'>
                <img loading='lazy' className='object-contain' src={image} alt={"Game" + id} />
            </div>
            <div className='secondary w-40 h-12 relative ml-20 -mt-12 shadow-2xl shadow-black z-10 flex justify-center items-center'>
                <span className='bg-white object-contain py-1 w-36 text-center'>Game {id}</span>
            </div>
        </div>
    );
};

export default GameList;
