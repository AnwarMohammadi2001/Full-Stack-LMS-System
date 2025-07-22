import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const fetchCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []); // Fetch courses on component mount

  const value = {
    // Your shared values go here
    currency,
    allCourses,
    navigate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
