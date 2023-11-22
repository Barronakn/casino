import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Customer from '@/Components/Customer';
import Footer from '@/Components/Footer';
import Game from '@/Components/Game';
import Nav from '@/Components/Nav';
import NavResponsiv from '@/Components/NavResponsiv';
import React from 'react';

const Welcome = () => {
    return (
        <div>
            <Nav />
            <NavResponsiv />
            <Game />
            <About />
            <Customer />
            <Contact />
            <Footer />
        </div>
    );
};

export default Welcome;
