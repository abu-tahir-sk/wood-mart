import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MiddleNavbar from "./MiddleNavbar";
import BottomNav from "./BottomNav";
import MdNavbar from "./MdNavbar";

const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="hidden xl:flex">
            <MiddleNavbar/>
        </div>
        <div className="hidden xl:block">
            <BottomNav/>
        </div>
        <div className="block xl:hidden">
          <MdNavbar/>
        </div>
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
