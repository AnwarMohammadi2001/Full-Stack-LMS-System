import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  // Function to fetch courses (simulated with dummy data)
  const fetchCourses = async () => {
    setAllCourses(dummyCourses);
  };
  const calculateRating = (course) => {
    if (
      !course ||
      !Array.isArray(course.courseRating) ||
      course.courseRating.length === 0
    ) {
      return 0;
    }

    const totalRating = course.courseRating.reduce(
      (sum, rating) => sum + rating.rating,
      0
    );
    return totalRating / course.courseRating.length;
  };

  useEffect(() => {
    fetchCourses();
  }, []); // Fetch courses on component mount

  const value = {
    // Your shared values go here
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
