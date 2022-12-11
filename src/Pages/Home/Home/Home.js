import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import WhatIDo from '../WhatIDo/WhatIDo';

const Home = () => {
    return (
        <>
            <Header />
            <WhatIDo />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </>
    );
};

export default Home;