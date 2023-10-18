import { Header, RightSidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid-template">
      <Header />
      <RightSidebar />
      <main className="content-wrapper bg-base-200 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
