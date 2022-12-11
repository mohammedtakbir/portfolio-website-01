import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';

const ProjectDetail = () => {
    const id = useParams();
    const [projectDetail, setProjectDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const { descriptions, screen_shots, live_site, client_site, server_site, project_name, title, tech } = projectDetail;

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/projects-details/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setProjectDetail(data);
            })
    }, [id.id])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='md:max-w-[1300px] sm:w-full max-w-[500px] mx-auto md:pt-16 pt-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center mx-2'>
                {
                    screen_shots?.map(shot => (
                        <img
                            className='w-full h-[400px] shadow-sm border rounded-lg'
                            src={shot}
                            alt=""
                        />
                    ))
                }
            </div>
            <div className='mx-2 mt-5 mb-3'>
                <h2 className='text-3xl font-semibold'>{project_name}</h2>
                <p className='font-medium'>{title}</p>
                <p className='text-sm font-medium'>
                    Technologies: {tech}
                </p>
            </div>
            <div className='mx-2'>
                <h2 className='text-2xl font-medium'>Features</h2>
                {
                    descriptions?.map(description => (
                        <li>{description}</li>
                    ))
                }
            </div>
            <div className='pt-5 mx-2'>
                <a href={live_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3'>
                        Live Site
                    </button>
                </a>
                <a href={client_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3'>
                        Client Site
                    </button>
                </a>
                <a href={server_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3 sm:mt-0 mt-3'>
                        Server Site
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;