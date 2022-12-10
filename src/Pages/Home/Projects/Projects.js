import React from 'react';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            project_name: 'E-Buy',
            img: 'https://i.ibb.co/c3NjGBs/Screenshot-28.png',
            description: 'Used Smartphone Resale website',
            live_link: 'https://e-buy-2e0e3.web.app/'
        },
        {
            project_name: 'Wild Eye',
            img: 'https://i.ibb.co/GFdr0J7/Screenshot-27.png',
            description: 'Learn photography Tips & Tricks',
            live_link: 'https://wildeye-ca61d.web.app/'
        },
        {
            project_name: 'Programming.info',
            img: 'https://i.ibb.co/QFGkghN/Screenshot-30.png',
            description: 'Online learning platform',
            live_link: 'https://programming-info-36e8e.web.app/'
        }
    ]
    return (
        <div className='container mx-auto md:pt-0 pt-10'>
            <h2 className='text-[25px] font-semibold mb-3 md:mx-0 mx-2'>Recent Projects</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:mx-0 mx-2'>
                {
                    projects.map((project, i) => <Project
                        key={i}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;