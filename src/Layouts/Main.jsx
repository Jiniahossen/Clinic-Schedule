import Navbar from "../Components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar>
                <Outlet></Outlet>
            </Navbar>


        </div>
    );
};

export default Main;