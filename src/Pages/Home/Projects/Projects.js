import React from 'react';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'E-Buy',
            img: 'https://i.ibb.co/c3NjGBs/Screenshot-28.png',
            description: 'Used Smartphone Resale website',
            live_link: 'https://e-buy-2e0e3.web.app/'
        },
        {
            id: 2,
            project_name: 'Wild Eye',
            img: 'https://i.ibb.co/GFdr0J7/Screenshot-27.png',
            description: 'Photography services review website',
            live_link: 'https://wildeye-ca61d.web.app/'
        },
        {
            id: 3,
            project_name: 'Programming.info',
            img: 'https://i.ibb.co/QFGkghN/Screenshot-30.png',
            description: 'Online learning platform',
            live_link: 'https://programming-info-36e8e.web.app/'
        }
    ]
    return (
        <div className='md:max-w-[1200px] sm:w-full max-w-[500px] mx-auto md:pt-16 mt-3'>
            <h2
                className='text-[23px] font-semibold mb-4 md:mx-0 mx-2'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
            >
                Recent Projects
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-2'>
                {
                    projects.map((project) => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;