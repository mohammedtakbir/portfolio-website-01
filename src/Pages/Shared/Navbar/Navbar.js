import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='container mx-auto py-5'>
            <nav className='md:container mx-auto flex justify-between items-center relative'>
                <Link to='/' className='flex items-center'>
                    <span className='bg-[#54CA95] font-black text-3xl w-[45px] h-[45px] rounded-full text-center leading-[45px] text-white'>T</span>
                    <span className='mx-2 font-semibold text-2xl'>Takbir</span>
                    <span className='text-2xl'>Hossain</span>
                </Link>
                <ul className={`md:bg-transparent bg-gray-200 md:flex md:justify-end md:static absolute w-full text-center z-10 ${open ? 'top-14' : 'top-[-250px]'}`}>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { color: '#333' } : undefined
                        }} className='text-sm font-medium text-gray-400 hover:text-[#333] duration-200' to='/'>Home</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { color: '#333' } : undefined
                        }} className='text-sm font-medium text-gray-400 hover:text-[#333] duration-200' to='/about'>About me</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <a href='https://drive.google.com/file/d/1BAnYLIQUkhNqM8wUzqP3LiTRy4tyI-0w/view?usp=sharing' className='text-sm font-medium text-gray-400 hover:text-[#333] duration-200'>Resume</a>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { color: '#333' } : undefined
                        }} className='text-sm font-medium text-gray-400 hover:text-[#333] duration-200' to='/contact'>Contact</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-5'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { color: '#333' } : undefined
                        }} className='text-sm font-medium text-gray-400 hover:text-[#333] duration-200' to='/blog'>Blog</NavLink>
                    </li>
                </ul>
                <div className='md:hidden md:pr-0 pr-3'>
                    {
                        open ?
                            <HiX onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" /> :
                            <HiMenuAlt3 onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;