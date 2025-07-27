import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import assets from "../../assets/assets";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams(); // گرفتن id از URL
  const [openSection, setOpenSection] = useState({});
  const {
    allCourses,
    calculateRating,
    calculateNoOFLectures,
    calculateCourseDuration,
    calculateChapterTime,
  } = useContext(AppContext); // گرفتن لیست همه دوره‌ها از context
  const [courseData, setCourseData] = useState(null); // تعریف state برای نگهداری داده‌های دوره
  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
        {/* Rating */}
        <div className="flex items-center gap-2 pt-3 pb-1">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index < Math.floor(calculateRating(courseData))
                    ? assets.star
                    : assets.star_blank
                }
                alt="rating"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <span className="text-gray-500">
            {courseData.courseRatings.length}{" "}
            {courseData.courseRatings.length > 1 ? "ratings" : "rating"}
          </span>
          {/* total number of enrolled students */}
          <p>
            ( {courseData.enrolledStudents.length}{" "}
            {courseData.enrolledStudents.length > 1 ? "students" : "studen"})
          </p>
        </div>
        <p className="text-sm">
          Course By <span className="text-blue-600">Creat</span>
        </p>
        <div>
          <p className="text-xl font-semibold">Course Structure</p>
          <div>
            {courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white mb-2 rounded"
              >
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none "
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={assets.down_arrow_icon}
                      alt=" arrow icon"
                      className={`transition transform ${
                        openSection[index] ? "rotate-180" : ""
                      } `}
                    />
                    <p className="font-medium md:text-base text-sm">
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-default">
                    {chapter.chapterContent.length} - Lectures{" "}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection[index] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className="flex items-start gap-2 py-1">
                        <img
                          src={assets.play_icon}
                          alt=""
                          className="w-4 h-4 mt-1"
                        />
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p>{lecture.lectureTitle}</p>
                          <div className="flex gap-2 items-center">
                            {lecture.isPreviewFree && (
                              <p className="text-blue-500 cursor-pointer">
                                Preview
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right column */}
      <div></div>
    </div>
  );
};

export default CourseDetails;
