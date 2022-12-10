import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { img, project_name, description, live_link } = project
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                <Link to="#">
                    <img className="rounded-t-lg h-[350px] w-full" src={img} alt="" />
                </Link>
                <div className="p-5">
                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project_name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700">{description}</p>
                    <a href={live_link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#54CA95] rounded-lg hover:bg-[#54CA95] focus:ring-4 focus:outline-none focus:ring-[#54CA95]">
                        Visit Live Site
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Project;