import { NavLink, Outlet, Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { FaHouseUser, FaList, FaUsers } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { GrTestDesktop } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { GiVerticalBanner } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const isAdmin = true;
    const { user } = useAuth();

    return (
        <div className=" flex max-w-full min-h-screen">
            <div className="p-6  w-80 bg-white text-black border border-r-[#219f85] ">
                <div className=" w-72 mx-auto p-6">
                    <h1 className=" text-2xl font-serif font-bold  text-[#219f85]">CliniSchedule</h1>

                    {
                        !isAdmin ? <>
                            <div className="flex  gap-2">
                                <img src={user?.photoUrl} alt="" className=" h-20 w-20 rounded-full" />
                                <h1 className=" text-base font-serif text-black">{user?.displayName}</h1>
                            </div>
                            <Link>
                                <p className="pt-4 text-md text-blue-500 font-serif">Edit Profile</p>
                            </Link></> : <>
                            <div>
                                <h1>{''}</h1></div></>
                    }

                </div>

                <ul className="menu text-black text-base font-serif gap-4 uppercase" >
                    {
                        isAdmin ? <>
                          <li>
                            <NavLink to='/dashboard/all-users' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "ps-2 py-1 w-full text-[#219f85] text-lg font-serif border-r-[#219f85]" : ""
                            }>
                                <FaUsers className=" text-2xl" />
                                All Users</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/add-test' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                            }>
                                <IoAdd className=" text-2xl"/>
                                Add a test</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/all-test' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                            }>
                                <GiTestTubes className=" text-2xl" />
                                All Test</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/reservation' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                            }>
                                <FaList className=" text-2xl" />
                                Reservation</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/add-banner' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 tex text-[#219f85] font-serif" : ""
                            }>
                                <GiVerticalBanner className="text-2xl" />
                                Add Banner</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/all-banner' className={({ isActive, isPending }) =>
                                isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                            }>
                                <CgNotes className=" text-2xl" />
                                All Banner</NavLink>
                            </li>
                          
                        </> :
                            <>
                                <li><NavLink to='/dashboard/myprofile' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-base text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-base font-serif" : ""
                                }>
                                    <FaUserMd className=" text-2xl"></FaUserMd>
                                    My Profile</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/appointments' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                }>
                                    <GiNotebook className=" text-2xl"></GiNotebook>
                                    Upcoming Appointments</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/test' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                                }>
                                    <GrTestDesktop className=" text-2xl"></GrTestDesktop>
                                    Test Result</NavLink>
                                </li>
                             
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                    }>
                        <FaHouseUser className=" text-2xl"></FaHouseUser>
                        Home</NavLink>
                    </li>
                    <li><NavLink to='/ourmenu' className={({ isActive, isPending }) =>
                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                    }>
                        <FiMenu className=" text-2xl"></FiMenu>
                        Menu</NavLink>
                    </li>
                    <li><NavLink to='/ourmenu' className={({ isActive, isPending }) =>
                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                    }>
                        <LuShoppingBag className=" text-2xl"></LuShoppingBag>
                        Shop</NavLink>
                    </li>
                    <li><NavLink to='/contactus' className={({ isActive, isPending }) =>
                        isPending ? "px-2 py-1 bg-none text-lg text-white font-serif " : isActive ? "px-2 py-1 text-[#219f85] text-lg font-serif" : ""
                    }>
                        <MdOutlineContactPhone className=" text-2xl"></MdOutlineContactPhone>
                        Contact</NavLink>
                    </li>
                </ul>


            </div>
            <div className=" flex-1 px-8 ">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;