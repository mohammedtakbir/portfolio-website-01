import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="divider pb-2 md:mt-16 mt-10"></div>
            <div className='container mx-auto'>
                <footer className="px-4 pb-4 dark:text-gray-400">
                    <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
                                <span className='bg-[#54CA95] font-black text-[26px] w-[40px] h-[40px] rounded-full text-center leading-[45px] text-white'>T</span>
                            </div>
                            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                                <li className='text-sm text-secondary'>
                                    © 2022 All rights reserved. Takbir Hossain
                                </li>
                            </ul>
                        </div>
                        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-sm">
                            <li>
                                <a
                                    target='_blank'
                                    className='hover:text-primary duration-200 font-semibold'
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/takbirhossain/"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    className='hover:text-primary duration-200 font-semibold'
                                    rel="noopener noreferrer"
                                    href="https://github.com/mohammedtakbir"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    className='hover:text-primary duration-200 font-semibold'
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/mdtakbirhossain.hossain"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    className='hover:text-primary duration-200 font-semibold'
                                    rel="noopener noreferrer"
                                    href="https://twitter.com/TakbirMohammed"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;