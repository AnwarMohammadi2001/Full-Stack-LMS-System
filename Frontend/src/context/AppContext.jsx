import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

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
  // calculate rating star
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

  // function to calculate the Course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // function to calculate Course Duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // funtion to calculate the No of lectures in the course
  const calculateNoOFLectures = (course) => {
    let totlaLecture = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totlaLecture += chapter.chapterContent.length;
      }
    });
    return totlaLecture;
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
    calculateNoOFLectures,
    calculateCourseDuration,
    calculateChapterTime,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
