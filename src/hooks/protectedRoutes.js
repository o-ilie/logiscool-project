import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Layout } from "../src/components";

const ProtectRoutes = () => {
  const { cookies } = useAuth();
  console.log(cookies);
  return cookies.token ? <Layout /> : <Navigate to="/login" exact />;
};

export default ProtectRoutes;
