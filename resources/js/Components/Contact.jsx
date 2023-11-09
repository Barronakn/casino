import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='tertiaire py-20'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='secondary_color text-6xl font-bold'>What Says Our customer</h1>
                <span className='w-96 h-0.5 bg-white'></span>
            </div>
            <form className='flex flex-col gap-6 justify-center items-center m-12' action="">
                <input className='border-b-1 width border-white bg-transparent w-5/12 pl-0 placeholder:text-white' type="text" name="name" id="name" placeholder='Name' />
                <input className='border-b-1 width border-white bg-transparent w-5/12 pl-0 placeholder:text-white' type="tel" name="phone" id="phone" placeholder='Phone' />
                <input className='border-b-1 width border-white bg-transparent w-5/12 pl-0 placeholder:text-white' type="email" name="email" id="email" placeholder='Email' />
                <textarea className='border-b-1 width border-white bg-transparent w-5/12 pl-0 placeholder:text-white resize-none' name="message" id="message" cols="30" rows="1" placeholder='Message'></textarea>
                <input className='border-white border-2 rounded-3xl px-16 py-3 cursor-pointer text-white hover:bg-white' type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Contact;
