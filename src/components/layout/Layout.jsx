import { Header, RightSidebar } from "..";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid-template">
      <Header />
      <RightSidebar />
      <main className="content-wrapper bg-base-200 md:px-12 md:py-8 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
