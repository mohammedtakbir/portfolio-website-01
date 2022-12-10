import React, { useRef } from 'react';
import { FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_p5rt4en',
            'template_ce8xyuh',
            form.current,
            '2e95VstjhAiOaaUxj'
        )
            .then((result) => {
                e.target.reset();
                toast.success('Message sent successfully!')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='md:mx-0 mx-2'>
                <div className='bg-[#FCFCFC] md:mt-5 mt-0 md:mb-16 mb-10'>
                    <div className="divider my-0"></div>
                    <div className='md:flex md:justify-between container mx-auto md:py-0 py-6'>
                        <h2 className='sm:text-[40px] text-[30px] md:my-14 font-semibold'>Contact</h2>
                        <p className='text-[#aaa] md:mt-2'>Get in Touch</p>
                    </div>
                    <div className="divider my-0"></div>
                </div>
                <div className='container mx-auto'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.438312489121!2d90.50374027691828!3d23.72172116079032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6673815557f%3A0x81321617f1c22aa5!2sTarabo!5e0!3m2!1sen!2sbd!4v1670672522783!5m2!1sen!2sbd" width="1440" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className='md:flex md:mt-16 mt-10 gap-5'>
                        <div className='lg:w-[30%]'>
                            <div className='flex gap-5 md:mb-9 mb-5'>
                                <FaMobileAlt className='text-3xl text-[#54CA95]' />
                                <div>
                                    <h5 className='font-medium'>+8801836314043</h5>
                                    <p className='text-sm text-[#aaa]'>My Phone Number.</p>
                                </div>
                            </div>
                            <div className='flex gap-5 md:mb-9 mb-5'>
                                <FaMapMarkerAlt className='text-3xl text-[#54CA95]' />
                                <div>
                                    <h5 className='font-medium'>Narayanganj, Bangladesh</h5>
                                    <p className='text-sm text-[#aaa]'>My Location.</p>
                                </div>
                            </div>
                            <div className='flex gap-5 md:mb-9 mb-5'>
                                <HiMail className='text-3xl text-[#54CA95]' />
                                <div>
                                    <h5 className='font-medium'>takbirhossain678@gmail.com</h5>
                                    <p className='text-sm text-[#aaa]'>My Email Address.</p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[65%]'>
                            <h3 className='text-2xl font-semibold'>How Can I Help You?</h3>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className='my-5'
                            >
                                <div className='sm:flex gap-5'>
                                    <div className='flex flex-col gap-6 sm:w-[50%]'>
                                        <input
                                            name="user_name"
                                            type="text"
                                            placeholder="Full Name"
                                            className="input input-bordered"
                                        />
                                        <input
                                            name="user_email"
                                            type="email"
                                            placeholder="Email Address"
                                            className="input input-bordered"
                                        />
                                        <input
                                            name='subject'
                                            type="text"
                                            placeholder="subject"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="sm:w-[50%] w-full sm:mt-0 mt-4 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                        placeholder="Message...">

                                    </textarea>
                                </div>
                                <button
                                    type='submit'
                                    className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#54CA95] border-2 rounded-3xl hover:bg-[#54CA95] hover:text-[#fff] duration-300 mt-7'>
                                    Send Message
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;