import React from 'react';
import eCommerce from '../../../assets/shopping.png';
import design from '../../../assets/graphic-design.png';
import testing from '../../../assets/testing.png';
import performance from '../../../assets/performance.png';

const WhatIDo = () => {

    return (
        <div className='max-w-[1200px] mx-auto md:pb-16 pb-10 md:pt-0 pt-8' data-aos="zoom-in">
            <h2 className='text-[23px] font-semibold mb-4 md:mx-0 mx-2'>What I Do</h2>
            <div className='grid md:grid-cols-2 md:gap-7 gap-5 mx-2'>
                <div className='flex sm:gap-5 gap-3 md:mb-3'>
                    <img src={eCommerce} className='sm:w-16 w-10 sm:h-16 h-10' alt="" />
                    <div>
                        <h3 className='font-semibold text-lg mb-1'>E-commerce</h3>
                        <p className='text-[#666]'>I can build a fully functional E-commerce website using both Front-end and Back-end technologies like Javascript, React.js, Node.js, Express.js, Mongodb etc.</p>
                    </div>
                </div>
                <div className='flex sm:gap-5 gap-3 md:mb-3'>
                    <img src={design} className='sm:w-16 w-10 sm:h-16 h-10' alt="" />
                    <div>
                        <h3 className='font-semibold text-lg mb-1'>Responsive Web Design</h3>
                        <p className='text-[#666]'>People use a variety of devices to view websites.I can create sites that look as good on smartphones and tablets as they do on computer screens.</p>
                    </div>
                </div>
                <div className='flex sm:gap-5 gap-3'>
                    <img src={testing} className='sm:w-16 w-10 sm:h-16 h-10' alt="" />
                    <div>
                        <h3 className='font-semibold text-lg mb-1'>Testing web applications</h3>
                        <p className='text-[#666]'>Web Testing, or website testing is checking the web application or website for potential bugs before its made live and is accessible to general public. Web Testing checks for functionality, usability, security, compatibility, performance of the web application or website.</p>
                    </div>
                </div>
                <div className='flex sm:gap-5 gap-3'>
                    <img src={performance} className='sm:w-16 w-10 sm:h-16 h-10' alt="" />
                    <div>
                        <h3 className='font-semibold text-lg mb-1'>Troubleshooting problems with performance</h3>
                        <p className='text-[#666]'>Developers often run into issues when designing websites. I have the patience and ability to identify problems in the design or coding and solve them in a methodical way.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;