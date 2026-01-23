import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Backend URL from Vite environment
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Create context
export const AppContext = createContext(null);
axios.defaults.withCredentials = true;
// Context Provider
export const AppContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);
  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data");
      data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getAuthState();
  }, []);
  return (
    <AppContext.Provider
      value={{
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

///dsfdsfdsfdfdsfdfdfdsfdsfdsfdsfdfdsfdfdsfdsfdsfdsf
