import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../services/axios";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(() => {
    let userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      JSON.parse(userProfile);
    }
    return null;
  });

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await Axios.post("/api/auth/login/", { ...credentials });

      // const apiResponse = await Axios.get("/api/user-profile");
      if (response.status === 200) {
        const apiResponse = {};
        apiResponse.data = {
          email: "test@yahoo.com",
          exp: 1666020196,
          firstName: "Ioana",
          lastName: "Ilie",
          id: 123333,
        };
        setUser(apiResponse.data);
        localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
        navigate("/");
        setSuccess(true);
        return apiResponse.data;
      } else {
        setError(true);
        throw new Error("Login failed. Please try again.");
      }
    } catch (error) {
      setError(true);
      return error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userProfile");
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        loginResponse: { login, error, loading, success },
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};
