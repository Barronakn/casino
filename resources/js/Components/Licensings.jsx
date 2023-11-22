import React, { useState } from 'react';
import jons_img from "../../../public/assets/jons_img1.png"
import arrow from "../../../public/assets/arrow.svg"
import { Link } from '@inertiajs/react';

const Licensings = () => {

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

    return (
        <section>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl max-[768px]:text-3xl font-bold'>Licensing & Reglation</h1>
                <span className='w-96 max-[768px]:w-[100px] h-0.5 bg-white'></span>
            </div>

            <div className='licensing px-32 max-[1024px]:px-14 max-[768px]:px-10 max-[425px]:px-5 py-24 flex gap-5 items-center justify-center'>
                <img loading='lazy' onClick={() => handlePageChange(currentPage - 1)} className='pointer-events-none -rotate-90 w-14 h-14 cursor-pointer p-5 rounded-full secondary arrow max-[375px]:hidden' src={arrow} alt="arrow_left" />
                {licensingToDisplay.map((licensing, index) => (
                    <div className='pagination max-[600px]:flex-col flex gap-5 items-center justify-center secondary p-10 rounded-2xl' key={index}>
                        <div className='w-1/2 max-[600px]:w-full'>
                            <h2 className='text-[#1b0905] hover:text-[#1b0905] uppercase text-4xl max-[768px]:text-[25px]'>{licensing.title}</h2>
                            <p className='text-[#1b0905] hover:text-[#1b0905] py-10 leading-8'>{licensing.description}</p>
                            <Link href='#' className='bg-[#280e08] links max-[768px]:text-sm text-[#f5e47b] px-4 py-2 cursor-pointer hover:rounded-2xl transition-20 text-center uppercase text-xl'>{licensing.link}</Link>
                        </div>
                        <div className='w-1/2 max-[600px]:w-full'>
                            <img className='pointer-events-none' loading='lazy' src={jons_img} alt="jons_img" />
                        </div>
                    </div>
                ))}
                <img loading='lazy' onClick={() => handlePageChange(currentPage + 1)} className='pointer-events-none rotate-90 w-14 h-14 cursor-pointer p-5 rounded-full secondary arrow max-[375px]:hidden' src={arrow} alt="arrow_left" />
            </div>

            <p className='text-white text-center mx-24 max-[768px]:mx-12 max-[375px]:mx-8'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
        </section>
    );
};

export default Licensings;
