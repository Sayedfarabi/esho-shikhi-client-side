import { createBrowserRouter } from "react-router-dom";
import Accounts from "../components/Accounts";
import Blog from "../components/Blog";
import Course from "../components/Course";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Root from "../components/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://esho-shikhi-server.vercel.app'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/courses/:id",
                element: <Course></Course>,
                loader: async ({ params }) => await fetch(`https://esho-shikhi-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/accounts',
                element: <Accounts></Accounts>
            }
        ]


    }
])

export default router;