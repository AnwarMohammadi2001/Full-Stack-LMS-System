import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CourseDetails = () => {
  const { id } = useParams(); // گرفتن id از URL
  const { allCourses } = useContext(AppContext); // گرفتن لیست همه دوره‌ها از context
  const [courseData, setCourseData] = useState(null); // تعریف state برای نگهداری داده‌های دوره

  useEffect(() => {
    // یافتن دوره مورد نظر بر اساس id از لیست allCourses
    if (allCourses && allCourses.length > 0) {
      const course = allCourses.find((course) => course._id === id);
      if (course) {
        setCourseData(course);
      }
    }
  }, [allCourses, id]);

  if (!courseData) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
      <div className="absolute  top-0 left-0 w-full z-10 bg-gradient-to-b from-cyan-100/70 h-[400px]"></div>

      {/* left cloum */}
      <div className="max-w-xl z-10 text-gray-500">
        <h1 className="font-semibold text-gray-800 text-xl">
          {courseData.courseTitle}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription.slice(0, 200),
          }}
          className="text-gray-500 pt-4 text-xs md:text-sm"
        />
        {/* Course Review */}
      </div>
      {/* right column */}
      <div></div>
    </div>
  );
};

export default CourseDetails;
