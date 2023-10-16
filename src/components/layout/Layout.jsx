import Header from "../header/Header";
import RightSidebar from "../sidebar/RightSidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <RightSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
