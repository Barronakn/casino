import React from 'react';
import CustomerImg from "../../../public/assets/customer.png"

const Customer = () => {
    return (
        <section id='customer' className='tertiaire py-20'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl text-center font-bold'>What Says Our customer</h1>
                <span className='w-96 h-0.5 bg-white'></span>
            </div>
            <div className='customer flex flex-col mt-12 justify-center items-center'>
                <div className='customer-text text-center bg-gray-300 leading-8 px-10 py-24 w-8/12'>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
                <div className='secondary w-40 h-40 -mt-20 rounded-full flex justify-center items-center'>
                    <img loading='lazy' className='object-contain' src={CustomerImg} alt="customer-img" />
                </div>
                <div className='mt-2'>
                    <h3 className='secondary_color text-center text-xl'>Mark jo</h3>
                    <p className='text-white'>JECTED HUMOUR</p>
                </div>
            </div>
        </section>
    );
};

export default Customer;
