import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className="divider mb-2"></div>
            <div className='container mx-auto'>
                <footer className="px-4 pb-2 dark:text-gray-400">
                    <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
                            <span className='bg-[#54CA95] font-black text-3xl w-[45px] h-[45px] rounded-full text-center leading-[45px] text-white'>T</span>
                            </div>
                            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                                <li>
                                    <Link rel="noopener noreferrer" href="#">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link rel="noopener noreferrer" href="#">Privacy</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Instagram</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Facebook</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Twitter</Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;