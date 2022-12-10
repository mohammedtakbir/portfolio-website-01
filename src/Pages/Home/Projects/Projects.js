import React from 'react';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            project_name: 'E-Buy',
            img: 'https://i.ibb.co/c3NjGBs/Screenshot-28.png',
            description: 'Used Smartphone Resale website'
        },
        {
            project_name: 'Wild Eye',
            img: 'https://i.ibb.co/GFdr0J7/Screenshot-27.png',
            description: 'Learn photography Tips & Tricks'
        },
        {
            project_name: 'Programming.info',
            img: 'https://i.ibb.co/QFGkghN/Screenshot-30.png',
            description: 'Online learning platform'
        }
    ]
    return (
        <div className='container mx-auto'>
            <h2 className='text-[25px] font-semibold mb-3'>Recent Projects</h2>
            <div className='grid grid-cols-3 gap-10'>
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