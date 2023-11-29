import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useBlocked from "../../../hooks/useBlocked";

const Navbar = ({ children }) => {

    const { user, logOut } = useAuth();
    const [isBlocked] = useBlocked();

    const handleLogOut = () => {
        logOut()
            .then(res => {
                Swal.fire("You have logged out!");
            })
    }
    return (
        <div>
            <div className=" ">
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar flex-1  shadow-md">
                            <div className=" w-[90%]  mx-auto">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <div className="flex-1 px-2 mx-2 ">
                                    <div className="flex w-28">
                                        <img src="https://i.ibb.co/8sM7Lb4/Screenshot-2023-11-08-113221-removebg-preview.png" className=" w-28" alt="" />
                                        {/* <h1 className=" text-[#f47723] font-extrabold font-serif text-2xl">Apply4you</h1> */}
                                    </div>
                                </div>
                                <div className="flex-none  lg:block text-lg font-serif me-0 md:me-32 " id="large-device-menu" >
                                    <ul className=" menu-horizontal gap-6">
                                        {/* Navbar menu content here */}
                                        <div >
                                            <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </div>
                                        {
                                            isBlocked ? <></> : <>
                                                <div >
                                                    <NavLink
                                                        to="/all-tests"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                        }
                                                    >
                                                        All Test
                                                    </NavLink>
                                                </div></>
                                        }

                                        {
                                            isBlocked ? <></> : <>
                                                <div>
                                                    <NavLink
                                                        to="/dashboard"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                        }
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </div></>
                                        }
                                        <div>
                                            <NavLink
                                                to="/recommendations"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                }
                                            >
                                                Recommendations
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink
                                                to="/about-us"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                }
                                            >
                                                About Us
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink
                                                to="/contact-us"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                                }
                                            >
                                                Contact Us
                                            </NavLink>
                                        </div>
                                    </ul>
                                </div>

                                <div className="navbar-end text-lg font-serif">
                                    <>
                                        {
                                            user ?
                                                <div className="navbar-end flex items-center">
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                            <div className="w-10 rounded-full">
                                                                <img src={user.photoURL} />
                                                            </div>
                                                        </label>
                                                        <ul tabIndex={0} className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 gap-2">
                                                            <li>{user.displayName}</li>
                                                            <li><button className=" text-[#219f85] px-4 font-serif" onClick={handleLogOut}>Logout</button></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="flex-none">
                                                            <div className="dropdown dropdown-end">
                                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                                    <button className=" btn-circle">
                                                                        <div className="indicator">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                                                            <span className="badge badge-xs badge-primary indicator-item"></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                                                    <div className="card-body">
                                                                        {
                                                                            isBlocked ? <>
                                                                                <h1 className="text-red-600">You have been blocked by admin.</h1>
                                                                            </> : <>No notification yet!</>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                :
                                                <div className="navbar-end flex gap-2">
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn btn-circle avatar">
                                                            <FaUserAlt className="w-ull text-center  text-2xl"></FaUserAlt>

                                                        </label>
                                                        <ul tabIndex={0} className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 gap-2">
                                                            <li>
                                                                <Link to='/login'><button className="text-[#219f85] px-4 py-1 font-serif">Login</button></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                        }
                                    </>
                                </div>
                            </div>
                        </div>
                        {/* Page content here */}
                        {children}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-6 text-lg font-serif">
                            {/* Sidebar content here */}

                            <div >
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </div>
                            {
                                isBlocked ? <></> : <>
                                    <div>
                                        <NavLink
                                            to="/all-tests"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                            }
                                        >
                                            All Test
                                        </NavLink>
                                    </div></>
                            }

                            {
                                isBlocked ? <></> : <>
                                    <div>
                                        <NavLink
                                            to="/dashboard"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div></>
                            }
                            <div>
                                <NavLink
                                    to="/recommendations"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                    }
                                >
                                    Recommendations
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                    }
                                >
                                    About Us
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1  text-lg font-serif text-[#219f85]" : ""
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
