import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { FaArrowRight } from "react-icons/fa";

const ProjectDetail = () => {
    const id = useParams();
    const [projectDetail, setProjectDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const { descriptions, screen_shots, live_site, client_site, server_site, project_name, title, tech } = projectDetail;

    useEffect(() => {
        setLoading(true)
        fetch(`https://portfolio-website-01.vercel.app/projects-details/${id.id}`)
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
        <div className='md:max-w-[1300px] sm:w-full max-w-[500px] mx-auto md:pt-16 pt-10' data-aos="zoom-in">
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
            <div className='mx-2 mt-5 mb-2'>
                <h2 className='sm:text-3xl text-2xl font-semibold sm:mb-1'>{project_name}</h2>
                <p className='font-medium sm:mb-0 mb-2'>{title}</p>
                <p className='font-medium sm:text-base text-sm'>
                    <span className='font-semibold'>Technologies:</span> {tech}
                </p>
            </div>
            <div className='mx-2'>
                <h2 className='sm:text-2xl text-xl font-medium mb-2'>Features</h2>
                <ul className='sm:ml-10 ml-3'>
                    {
                        descriptions?.map(description => (
                            <>

                                <li
                                    className='sm:mb-1 mb-2 sm:text-base text-sm flex sm:gap-5 gap-2'
                                >
                                    <FaArrowRight className='mt-1 text-[#54CA95]' />
                                    <span className='w-[95%]'>{description}</span>
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>
            <div className='pt-5 mx-2'>
                <a href={live_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3 sm:mt-0'>
                        Live Website
                    </button>
                </a>
                <a href={client_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3 mt-3'>
                        Client Site code
                    </button>
                </a>
                <a href={server_site} target='_blank'>
                    <button
                        className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3 sm:mt-0 mt-3'>
                        Server Site code
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;