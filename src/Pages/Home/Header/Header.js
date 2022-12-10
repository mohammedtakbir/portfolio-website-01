import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/profile_img.png';

const Header = () => {

    return (
        <div className='container mx-auto'>
            <div className='md:flex justify-center items-center xl:py-[80px] md:py-[70px] pt-5 xl:px-[150px]'>
                <div className='md:w-[45%]'>
                    <img className='lg:w-[400px] w-[300px] lg:h-[400px] h-[300px] border-[10px] border-white rounded-full mx-auto shadow-xl' src={img} alt="" />
                </div>
                <div className='md:w-[52%] sm:pt-0 pt-10 md:mx mx-2'>
                    <h4 className='text-[#aaa]'>Front-end Developer</h4>
                    <h2 className='sm:text-[48px] text-[38px] font-semibold sm:mt-2 mt-1 sm:mb-3 mb-1'>Takbir Hossain</h2>
                    <p className='text-[#666] mb-[30px]'>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
                    <div>
                        <a href="https://drive.google.com/file/d/1BAnYLIQUkhNqM8wUzqP3LiTRy4tyI-0w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button
                                className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3'>
                                Download Resume
                            </button>
                        </a>
                        <Link to='/contact'>
                            <button className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#d5d5d5] border-2 rounded-3xl hover:bg-[#d5d5d5] hover:text-[#333] duration-300'>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;