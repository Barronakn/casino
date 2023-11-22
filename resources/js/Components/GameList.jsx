import React from 'react';
import game1 from "../../../public/assets/game1.jpg";
import game2 from "../../../public/assets/game2.jpg";
import game3 from "../../../public/assets/game3.jpg";
import game4 from "../../../public/assets/game4.jpg";
import game5 from "../../../public/assets/game5.jpg";
import game6 from "../../../public/assets/game6.jpg";

const GameList = () => {

    const datas = [
        {
            id: 1,
            image: game1
        },
        {
            id: 2,
            image: game2
        },
        {
            id: 3,
            image: game3
        },
        {
            id: 4,
            image: game4
        },
        {
            id: 5,
            image: game5
        },
        {
            id: 6,
            image: game6
        },
    ];

    return (
        <section className='games flex flex-wrap justify-center items-center gap-10 py-20 max-[375px]:px-[25px]'>
            {
                datas.map((data, index) => (
                    <div key={index} className='relative secondary w-80'>
                        <div className='p-4 flex flex-col justify-center items-center'>
                            <img loading='lazy' className='object-contain pointer-events-none' src={data.image} alt={"Game" + data.id} />
                        </div>
                        <div className='secondary w-40 h-12 relative ml-20 -mt-12 shadow-2xl shadow-black z-10 flex justify-center items-center'>
                            <span className='bg-white object-contain py-1 w-36 text-center'>Game {data.id}</span>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default GameList;
