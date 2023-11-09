import React, { useState } from 'react';
import GameList from './GameList';
import game1 from "../../../public/assets/game1.jpg";
import game2 from "../../../public/assets/game2.jpg";
import game3 from "../../../public/assets/game3.jpg";
import game4 from "../../../public/assets/game4.jpg";
import game5 from "../../../public/assets/game5.jpg";
import game6 from "../../../public/assets/game6.jpg";
import arrow from "../../../public/assets/arrow.svg"
import { Link } from '@inertiajs/react';
import jons_img from "../../../public/assets/jons_img1.png"

const Game = () => {

    const Licensings = [
        {
            title: "Promotins 1",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            link: "Play now"
        },
        {
            title: "Promotins 2",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            link: "Play now"
        },
        {
            title: "Promotins 3",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            link: "Play now"
        },
        {
            title: "Promotins 4",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            link: "Play now"
        },
    ];

    const itemsPerPage = 1;
    const totalItems = Licensings.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const licensingToDisplay = Licensings.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            const pagination = document.querySelector(".pagination");
            pagination.classList.add("transition")
        }
    };

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
        <section id='game' className='tertiaire py-20 relative'>
            <div className='flex justify-center items-center'>
                <Link href='#' className='absolute -top-7 bg-white px-14 py-3 link_hover cursor-pointer text-center uppercase text-xl'>Play now</Link>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl font-bold'>Our Casino Games</h1>
                <span className='w-96 h-0.5 bg-white'></span>
            </div>
            <section className='games flex flex-wrap justify-center items-center gap-10 py-20'>
                {
                    datas.map((data) => <GameList key={data.id} {...data} />)
                }
            </section>
            <section>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h1 className='secondary_color text-6xl font-bold'>Licensing & Reglation</h1>
                    <span className='w-96 h-0.5 bg-white'></span>
                </div>

                <div className='licensing px-32 py-24 flex gap-5 items-center justify-center'>
                    <img loading='lazy' onClick={() => handlePageChange(currentPage - 1)} className='-rotate-90 w-14 h-14 cursor-pointer p-5 rounded-full secondary arrow' src={arrow} alt="arrow_left" />
                    {licensingToDisplay.map((licensing, index) => (
                        <div className='pagination flex gap-5 items-center justify-center secondary p-10 rounded-2xl' key={index}>
                            <div className='w-1/2 width'>
                                <h2 className='text-white tertiaire_color uppercase text-4xl'>{licensing.title}</h2>
                                <p className='text-gray-400 tertiaire_color py-10 leading-8'>{licensing.description}</p>
                                <Link href='#' className='bg-red-10 links color_primary px-4 py-2 cursor-pointer hover:rounded-2xl transition-20 text-center uppercase text-xl'>{licensing.link}</Link>
                            </div>
                            <div className='w-1/2 width'>
                                <img loading='lazy' src={jons_img} alt="jons_img" />
                            </div>
                        </div>
                    ))}
                    <img loading='lazy' onClick={() => handlePageChange(currentPage + 1)} className='rotate-90 w-14 h-14 cursor-pointer p-5 rounded-full secondary arrow' src={arrow} alt="arrow_left" />
                </div>

                <p className='text-white text-center mx-24'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </section>
        </section>
    );
};

export default Game;
