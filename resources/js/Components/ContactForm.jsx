import React from 'react';

const ContactForm = () => {
    return (
        <form className='flex flex-col gap-6 justify-center items-center m-12 text-white' action="#">
            <input className='border-x-transparent border-t-transparent border-transparent border-b-[1px] border-b-white max-[600px]:w-full border-white bg-transparent w-5/12 pl-2 placeholder:text-white' type="text" name="name" id="name" placeholder='Name' />
            <input className=' border-x-transparent border-t-transparent border-transparent border-b-[1px] border-b-white max-[600px]:w-full border-white bg-transparent w-5/12 pl-2 placeholder:text-white' type="tel" name="phone" id="phone" placeholder='Phone' />
            <input className=' border-x-transparent border-t-transparent border-transparent border-b-[1px] border-b-white max-[600px]:w-full border-white bg-transparent w-5/12 pl-2 placeholder:text-white' type="email" name="email" id="email" placeholder='Email' />
            <textarea className=' border-x-transparent border-t-transparent border-transparent border-b-[1px] border-b-white max-[600px]:w-full border-white bg-transparent w-5/12 pl-2 placeholder:text-white resize-none' name="message" id="message" cols="30" rows="1" placeholder='Message'></textarea>
            <input className='border-white border-2 rounded-3xl px-16 py-3 cursor-pointer text-white hover:bg-white' type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
