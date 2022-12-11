import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;