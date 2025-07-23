import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/student/SearchBar";
import CourseCard from "../../components/student/CourseCard";
import { AppContext } from "../../context/AppContext";
import assets from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CourseList = () => {
  const navigate = useNavigate();
  const { input } = useParams();
  const { allCourses } = useContext(AppContext);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses];
      if (input) {
        const filtered = tempCourses.filter((item) =>
          item.courseTitle.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCourses(filtered);
      } else {
        setFilteredCourses(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 py-20 text-left">
        {/* Top Section: Heading + Search */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-gray-300 rounded-md justify-between gap-6 p-6 bg-white">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <nav aria-label="breadcrumb">
              <p className="text-gray-500 mt-2">
                <span
                  onClick={() => navigate("/")}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Home
                </span>{" "}
                / Course List
              </p>
            </nav>
          </div>
          <div>
            <SearchBar data={input || ""} />
          </div>
        </div>

        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt=""
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}
        {/* Course Cards Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {filteredCourses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseList;
