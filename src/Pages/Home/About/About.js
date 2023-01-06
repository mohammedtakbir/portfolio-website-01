import React from 'react';
import about_img from '../../../assets/about_img.png'

const About = () => {
    return (
        <div id='about' className='max-w-[1200px] mx-auto md:pt-[100px] pt-10'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row items-start gap-6">
                    <img
                        src={about_img}
                        className="sm:h-[450px] h-[350px] rounded-lg shadow-2xl max-w-full mx-auto"
                        alt=''
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    />
                    <div
                        className='lg:mt-10 mt-3'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <h1 className="text-[23px] font-semibold text-primary">About</h1>
                        <div className='text-secondary'>
                            <p className="my-2">Hello, my name is Takbir Hossain.</p>
                            <p className='mb-3'>I have been learning web development for nearly one year. I have always been passionate about web development. I am constantly seeking out new technologies and stay up-to-date on trends in the industry.
                            </p>
                            <p>I am an expert in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React.js, Node.js,
                                Express.js, and MongoDB. To obtain a position with the opportunity to utilize my technical skills,
                                talent, creativity, and sincerity for better achievement for the client. I consider myself a quick
                                learner, self-motivated, responsible, and disciplined person who can work under pressure and
                                solve problems in critical situations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;