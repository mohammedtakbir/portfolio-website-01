import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import ProjectDetail from "../Pages/Home/Projects/ProjectDetail";
import Contact from "../Pages/Shared/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/project-detail/:id',
                element: <ProjectDetail />
            }
        ]
    }
])