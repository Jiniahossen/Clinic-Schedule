import { NavLink, Outlet } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { FaHouseUser, FaList, FaUsers } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { GrTestDesktop } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { GiVerticalBanner } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar/DashboardNavbar";
import '../index.css'
import { useState } from "react";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="max-w-full min-h-screen">
            {/* Dashboard NAvbar */}
            <DashboardNavbar></DashboardNavbar>
            <div className=" flex flex-col lg:flex-row">
                <div className="p-6 lg:w-80 bg-white text-black border border-r-[#219f85] ">
                    <div className=" w-72 mx-auto p-6">
                        <h1 className=" text-xl text-center lg:text-start  md:text-2xl font-serif font-bold  text-[#219f85]">CliniSchedule</h1>
                    </div>
                    <button
                        className="lg:hidden block text-2xl text-[#219f85] "
                        onClick={handleMenuToggle}
                    >
                        ☰
                    </button>
                    <ul className={`menu text-black text-base lg:text-lg font-serif gap-6 uppercase ${isMenuOpen ? "block" : "hidden lg:block"
                        }`} >
                        {
                            isAdmin ? <>
                                <li className="mb-4">
                                    <NavLink to='/dashboard/all-users' className={({ isActive, isPending }) =>
                                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "ps-2 py-1 w-full text-[#219f85] text-lg font-serif border-r-[#219f85]" : ""
                                    }>
                                        <FaUsers className=" text-lg md:text-2xl" />
                                        All Users</NavLink>
                                </li>
                                <li className="mb-4">
                                     <NavLink to='/dashboard/add-test' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                }>
                                    <IoAdd className="  text-lg md:text-2xl" />
                                    Add a test</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to='/dashboard/all-test' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                }>
                                    <GiTestTubes className=" text-lg md:text-2xl" />
                                    All Test</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to='/dashboard/reservation' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                }>
                                    <FaList className=" text-lg md:text-2xl" />
                                    Reservation</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to='/dashboard/add-banner' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 tex text-[#219f85] font-serif" : ""
                                }>
                                    <GiVerticalBanner className=" text-lg md:text-2xl" />
                                    Add Banner</NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to='/dashboard/all-banner' className={({ isActive, isPending }) =>
                                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                    }>
                                        <CgNotes className=" text-lg md:text-2xl" />
                                        All Banner</NavLink>
                                </li>

                            </> :
                                <>
                                    <li className="mb-4">
                                        <NavLink to='/dashboard/myprofile' className={({ isActive, isPending }) =>
                                        isPending ? "px-2 py-1 bg-none text-base text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-base font-serif" : ""
                                    }>
                                        <FaUserMd className=" text-lg md:text-2xl"></FaUserMd>
                                        My Profile</NavLink>
                                    </li>
                                    <li className="mb-4">
                                        <NavLink to='/dashboard/appointments' className={({ isActive, isPending }) =>
                                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                    }>
                                        <GiNotebook className=" text-lg md:text-2xl"></GiNotebook>
                                        Upcoming Appointments</NavLink>
                                    </li>
                                    <li className="mb-4">
                                        <NavLink to='/dashboard/test' className={({ isActive, isPending }) =>
                                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                    }>
                                        <GrTestDesktop className=" text-lg md:text-2xl"></GrTestDesktop>
                                        Test Result</NavLink>
                                    </li>

                                </>
                        }
                        <div className="divider"></div>
                        <li className="mb-4">
                            <NavLink to='/' className={({ isActive, isPending }) =>

                            isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                        }>
                            <FaHouseUser className=" text-lg md:text-2xl"></FaHouseUser>
                            Home</NavLink>
                        </li>
                        <li className="mb-4">
                             <NavLink to='/all-tests' className={({ isActive, isPending }) =>
                            isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                        }>
                            <FiMenu className=" text-lg md:text-2xl"></FiMenu>
                            All Test</NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink to='/contact-us' className={({ isActive, isPending }) =>
                            isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                        }>
                            <MdOutlineContactPhone className="text-lg md:text-2xl"></MdOutlineContactPhone>
                            Contact</NavLink>
                        </li>
                    </ul>


                </div>
                <div className=" flex-1 px-8 ">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;