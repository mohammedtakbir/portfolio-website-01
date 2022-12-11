import React from 'react';

const WhatIDo = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto md:pt-0 pt-3' data-aos="zoom-in">
                <h2 className='text-[23px] font-semibold mb-3 md:mx-0 mx-2'>Skills & Tools</h2>
                <div className='my-7 grid grid-cols-3 md:grid-cols-7 gap-5 text-center'>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://i0.wp.com/gafish.fr/wp-content/uploads/2013/03/html5.png?resize=512%2C445&ssl=1" alt="" />
                        <h2 className='font-medium'>HTML5</h2>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://e7.pngegg.com/pngimages/893/87/png-clipart-web-development-html-cascading-style-sheets-css3-bootstrap-minimalist-resume-blue-angle.png" alt="" />
                        <h2 className='font-medium'>CSS3</h2>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="" />
                        <h2 className='font-medium'>Tailwind CSS</h2>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                        <h2 className='font-medium'>Javascript</h2>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
                        <h2 className='font-medium'>React.js</h2>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='mb-2 w-20' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png" alt="" />
                        <h2 className='font-medium'>Node.js</h2>
                    </div>
                    <div className='flex items-center flex-col'> 
                        <img className='mb-2 w-20' src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                        <h2 className='font-medium'>MongoDb</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatIDo;