import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id='contact' className='bg-[#1b0905] py-20'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl max-[768px]:text-3xl max-[425px]:text-center font-bold'>What Says Our customer</h1>
                <span className='w-96 max-[768px]:w-[100px] h-0.5 bg-white'></span>
            </div>
            <ContactForm />
        </section>
    );
};

export default Contact;
