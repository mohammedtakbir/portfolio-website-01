import React from 'react';
import img from '../../../assets/profile_img.png';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {

    return (
        <div className='container mx-auto'>
            <div className='md:flex justify-center items-center xl:py-[90px] md:py-[70px] pt-5 xl:px-[150px]'>
                <div
                    className='md:w-[45%]'
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-once="true"
                >
                    <img
                        className='lg:w-[400px] w-[300px] lg:h-[400px] h-[300px] border-[10px] border-white rounded-full mx-auto shadow-xl'
                        src={img} alt=""
                    />
                </div>
                <div
                    className='md:w-[52%] sm:pt-0 pt-10 md:mx mx-2'
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-once="true"
                >
                    <h4 className=' text-lg text-primary'>
                        <Typewriter
                            words={['Front-end Developer', 'React.js Developer', 'MERN Stack Developer']}
                            loop={true}
                        />
                        <span className='invisible'>a</span>
                    </h4>
                    <h2 className='sm:text-[48px] text-[38px] font-semibold sm:mb-3 mb-1 text-primary'>Takbir Hossain</h2>
                    <p className=' mb-[30px] text-primary'>
                        I'm a web developer focusing on the Front-end Development, Javascript, and MERN stack but still exploring
                        other technologies and frameworks that catch my interest. if you're looking for a developer to add to your team,
                        I'd love to hear from you!
                    </p>
                    <div>
                        <a
                            href="https://drive.google.com/file/d/1eqc7pXNbyCPYYlxGBmUh_L-4jVqzFCVs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button
                                className='text-primary sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl 
                                hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3'>
                                Download Resume
                            </button>
                        </a>
                        <a href='#contact'>
                            <button
                                className='text-primary sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#d5d5d5] border-2 rounded-3xl
                             hover:bg-[#d5d5d5] hover:text-[#333] duration-300'
                            >
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;