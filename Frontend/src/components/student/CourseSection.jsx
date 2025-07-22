import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 space-y-5 px-8">
      <h2 className="text-3xl  font-medium text-gray-800">
        Learn from the best courses available
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Explore a wide range of courses designed to help you achieve your
        learning goals. Whether you're looking to enhance your skills, start a
        new career, or simply learn something new, we have the perfect course
        for you. Join our community of learners and educators today!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-0 md:my-16 my-10 ">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>
      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className=" text-gray-500 border border-gray-500/30 px-10  rounded py-3 "
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
