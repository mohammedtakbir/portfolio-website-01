import React from 'react';

const WhatIDo = () => {

    const skills = [
        {
            image: 'https://i0.wp.com/gafish.fr/wp-content/uploads/2013/03/html5.png?resize=512%2C445&ssl=1',
            name: 'HTML5'
        },
        {
            image: 'https://e7.pngegg.com/pngimages/893/87/png-clipart-web-development-html-cascading-style-sheets-css3-bootstrap-minimalist-resume-blue-angle.png',
            name: 'CSS3'
        },
        {
            image: 'https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg',
            name: 'Tailwind CSS'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            name: 'Javascript'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            name: 'React.js'
        },
        {
            image: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png',
            name: 'Node.js'
        },
        {
            image: 'https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png',
            name: 'MongoDB'
        }
    ]

    return (
        <>
            <div className='max-w-[1200px] mx-auto md:pt-0 pt-3' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                <h2 className='text-[23px] font-semibold mb-3 xl:mx-0 mx-2 text-primary'>Skills & Tools</h2>
                <div className='my-7 grid grid-cols-3 xl:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 gap-5 text-center'>
                    {
                        skills.map((skill, i) => (
                            <div key={i} className='flex items-center flex-col hover:scale-110 duration-500 cursor-pointer'>
                                <img className='mb-2 w-20 h-[75px]' src={skill.image} alt="" />
                                <h2 className='font-medium text-primary'>{skill.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default WhatIDo;