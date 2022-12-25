import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";


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

    console.log(screen_shots)

    return (
        <div className='md:max-w-[1200px] sm:w-full max-w-[500px] mx-auto md:pt-16 pt-10' data-aos="zoom-in">


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1536: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                }}
            >
                <SwiperSlide className='p-3'>
                    <img src={screen_shots?.img1} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className='p-3'>
                    <img src={screen_shots?.img2} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className='p-3'>
                    <img src={screen_shots?.img3} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className='p-3'>
                    <img src={screen_shots?.img4} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className='p-3'>
                    <img src={screen_shots?.img5} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img6 || 'hidden'}`}>
                    <img src={screen_shots?.img6} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img7 || 'hidden'}`}>
                    <img src={screen_shots?.img7} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img8 || 'hidden'}`}>
                    <img src={screen_shots?.img8} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img9 || 'hidden'}`}>
                    <img src={screen_shots?.img9} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img10 || 'hidden'}`}>
                    <img src={screen_shots?.img10} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
                <SwiperSlide className={`p-3 ${screen_shots?.img11 || 'hidden'}`}>
                    <img src={screen_shots?.img11} alt="" className='w-[full] h-[400px] border shadow-md rounded-md' />
                </SwiperSlide>
            </Swiper>

            <div className='mx-2 mt-5 mb-2'>
                <h2 className='sm:text-3xl text-2xl font-semibold sm:mb-1'>{project_name}</h2>
                <p className='font-medium sm:mb-0 mb-2'>{title}</p>
                <p className='font-medium sm:text-base text-sm'>
                    <span className='font-semibold'>Technologies:</span> {tech}
                </p>
            </div>
            <div className='mx-2'>
                <h2 className='sm:text-2xl text-xl font-medium mb-2'>Features</h2>
                <ul className='sm:ml-5 ml-3'>
                    {
                        descriptions?.map(description => (
                            <>
                                <li
                                    className='sm:mb-1 mb-2 sm:text-base text-sm flex sm:gap-5 gap-2'
                                >
                                    <FaArrowRight className='mt-1 text-[#54CA95]' />
                                    <spa border shadow-md rounded-mdn className='w-[95%]'>{description}</spa>
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
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center mx-2'>
                {
                    screen_shots?.map(shot => (
                        <img
                            className='w-full h-[400px] shadow-sm border rounded-lg'
                            src={shot}
                            alt=""
                        />
                    ))
                }
            </div> */}
        </div>

    );
};

export default ProjectDetail;

