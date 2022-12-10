import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/profile_img.png';

const Header = () => {

    return (
        <div className='container mx-auto'>
            <div className='md:flex justify-center items-center md:py-[100px] md:px-[150px]'>
                <div className='md:w-[45%]'>
                    <img className='w-[400px] h-[400px] border-[15px] border-white rounded-full mx-auto shadow-xl' src={img} alt="" />
                </div>
                <div className='md:w-[52%]'>
                    <h4 className='text-[#aaa]'>Front-end Developer</h4>
                    <h2 className='text-[48px] font-semibold'>Takbir Hossain</h2>
                    <p className='text-[#666] mb-[30px]'>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
                    <div>
                        <a href="https://drive.google.com/file/d/1BAnYLIQUkhNqM8wUzqP3LiTRy4tyI-0w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button
                                className='px-5 py-[10px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mr-3'>
                                Download Resume
                            </button>
                        </a>
                        <Link to='/contact'>
                            <button className='px-5 py-[10px] border-[#d5d5d5] border-2 rounded-3xl hover:bg-[#d5d5d5] hover:text-[#333] duration-300'>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;