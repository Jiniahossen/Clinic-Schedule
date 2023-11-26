
import Footer from "../Components/shared/Footer/Footer";
import Navbar from "../Components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar>
                <div className=" min-h-screen">
                    <Outlet></Outlet>
                </div>
            </Navbar>
            <Footer></Footer>


        </div>
    );
};

export default Main;