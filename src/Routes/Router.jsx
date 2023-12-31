import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import Appointments from "../pages/Dashboard/User/Appointments";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AddTest from "../pages/Dashboard/Admin/AddTest";
import AllTests from "../pages/Dashboard/Admin/AllTests";
import Reservation from "../pages/Dashboard/Admin/Reservation";
import AddBanner from "../pages/Dashboard/Admin/AddBanner";
import AllBanners from "../pages/Dashboard/Admin/AllBanners";
import UserTest from "../pages/Dashboard/User/UserTest";
import Alltest from "../pages/AllTest/Alltest";
import Details from "../pages/Details.jsx/Details";
import RecommendationsPage from "../pages/RcommendationPage/RecommendationsPage";
import RecommendationsDetails from "../pages/RcommendationPage/RecommendationsDetails";
import AboutUs from "../pages/Aboutus/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path:'/all-tests',
                    element:<Alltest></Alltest>
                },
                {
                    path:'/details/:id',
                    element:<Details></Details>,
                    loader:({params})=>fetch(`https://diagnostic-center-server-azure.vercel.app/tests/${params.id}`)
                },
                {
                    path:'/recommendations',
                    element:<RecommendationsPage></RecommendationsPage>
                    
                },
                {
                    path:'/recommendation-details/:id',
                    element:<RecommendationsDetails></RecommendationsDetails>,
                    loader:({params})=>fetch(`https://diagnostic-center-server-azure.vercel.app/recommendations/${params.id}`)
                    
                },
                {
                    path:'/about-us',
                    element:<AboutUs></AboutUs>
                },
                {
                    path:'/contact-us',
                    element:<ContactUs></ContactUs>
                }
            ]
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>,
            children: [
                //user routes
                {
                    path: '/dashboard/myprofile',
                    element:<UserProfile></UserProfile>
                },
                {
                    path:'/dashboard/appointments',
                    element:<Appointments></Appointments>
                },
                {
                    path:'/dashboard/test',
                    element:<UserTest></UserTest>
                },


                //admin routes
                {
                    path:'/dashboard/all-users',
                    element:<AllUsers></AllUsers>
                },
                {
                    path:'/dashboard/add-test',
                    element:<AddTest></AddTest>
                },
                {
                    path:'/dashboard/all-test',
                    element:<AllTests></AllTests>
                },
                {
                    path:'/dashboard/reservation',
                    element:<Reservation></Reservation>
                },
                {
                    path:'/dashboard/add-banner',
                    element:<AddBanner></AddBanner>
                },
                {
                    path:'/dashboard/all-banner',
                    element:<AllBanners></AllBanners>
                }
            ]
        }
    ]
)

export default Router;