import useAuth from "../../../../hooks/useAuth";
import { LuLayoutDashboard } from "react-icons/lu";

const DashboardNavbar = () => {
    const { user } = useAuth();
    const img=user?.photoURL  || ''
    const name = user?.displayName || '';
    return (
        <div className="bg-[#219f85]">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                <div className="flex gap-2 justify-center items-center ">
                    <LuLayoutDashboard className="text-white text-2xl"></LuLayoutDashboard>
                    <h1 className="text-xl font-serif font-extrabold text-white">Dashboard</h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                      <h1 className="text-base font-serif text-white uppercase">{name}</h1>
                      <img src={img} alt="" className=" rounded-full w-8" />
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;