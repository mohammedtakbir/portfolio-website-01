import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem('theme', !theme)
    }

    useEffect(() => {
        if (theme === true) {
            document.querySelector('html').setAttribute('data-theme', 'dark')
        } else {
            document.querySelector('html').setAttribute('data-theme', 'light')
        }
    }, [theme])

    useEffect(() => {
        const localTheme = JSON.parse(localStorage.getItem('theme'));
        setTheme(localTheme);
    }, [theme])

    return (
        <div className='container mx-auto sm:py-5 py-3'>
            <nav className='md:container mx-auto flex justify-between items-center relative'>
                <Link to='/' className='flex items-center xl:ml-0 ml-2'>
                    <span
                        className='bg-[#54CA95] font-black sm:text-3xl text-[26px] sm:w-[45px] w-[40px] sm:h-[45px] h-[40px] rounded-full
                         text-center sm:leading-[45px] leading-[40px] text-white'
                    >
                        T
                    </span>
                    <span className='mx-2 font-semibold text-2xl text-primary'>Takbir</span>
                    <span className='text-2xl text-primary'>Hossain</span>
                </Link>
                <ul
                    className={`md:bg-transparent bg-accent rounded-lg md:flex items-center md:justify-end md:static absolute w-full text-center
                     z-10 ${open ? 'top-12' : 'top-[-250px]'}`}
                >
                    <li className='md:mb-0 mb-4 md:pt-0 pt-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    {/* <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/blogs'
                        >
                            Blogs
                        </NavLink>
                    </li> */}
                    <li className='md:ml-7 md:mb-0 mb-4'>
                        <a
                            onClick={() => setOpen(!open)}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            href='#contact'
                        >
                            Contact
                        </a>
                    </li>
                    <li className='md:ml-7 md:mb-0 mb-4'>
                        <a
                            onClick={() => setOpen(!open)}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            href='#about'
                        >
                            About me
                        </a>
                    </li>
                    <li className='md:ml-7 md:mb-0 mb-4 xl:mr-0 sm:mr-2'>
                        <button onClick={handleThemeChange} className='text-[16px] font-medium mt-[7px]'>
                            {theme ? <BsFillSunFill className='text-white' /> : <BsFillMoonFill className='text-gray-500' />}
                        </button>
                    </li>
                </ul>
                <div className='md:hidden md:pr-0 pr-3'>
                    {
                        open ?
                            <HiX onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer text-primary" /> :
                            <HiMenuAlt3 onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer text-primary" />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;