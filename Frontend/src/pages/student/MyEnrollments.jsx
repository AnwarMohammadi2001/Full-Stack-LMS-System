import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);
  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLecture: 4 },
    { lectureCompleted: 5, totalLecture: 10 },
    { lectureCompleted: 6, totalLecture: 6 },
    { lectureCompleted: 8, totalLecture: 12 },
    { lectureCompleted: 1, totalLecture: 5 },
    { lectureCompleted: 7, totalLecture: 9 },
    { lectureCompleted: 4, totalLecture: 7 },
    { lectureCompleted: 6, totalLecture: 8 },
    { lectureCompleted: 0, totalLecture: 4 },
    { lectureCompleted: 9, totalLecture: 10 },
    { lectureCompleted: 2, totalLecture: 5 },
    { lectureCompleted: 10, totalLecture: 15 },
    { lectureCompleted: 11, totalLecture: 14 },
    { lectureCompleted: 3, totalLecture: 9 },
  ]);

  return (
    <>
      <div className="md:px-36 px-4 pt-10 pb-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🎓 My Enrollments
        </h1>
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="px-6 py-4 text-left">Course</th>
                <th className="px-6 py-4 text-left">Duration</th>
                <th className="px-6 py-4 text-left">Completed</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((enroll, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={enroll.courseThumbnail}
                      alt="course"
                      className="w-16 h-16 rounded-md object-cover border"
                    />
                    <div>
                      <span className="font-medium text-gray-800">
                        {enroll.courseTitle}
                      </span>
                      <Line
                        strokeWidth={4}
                        percent={
                          (progressArray[index]?.lectureCompleted /
                            progressArray[index]?.totalLecture) *
                          100
                        }
                        strokeColor="#3b82f6" // Tailwind's blue-500
                        trailColor="#e5e7eb" // Tailwind's gray-200
                        className="mt-2 w-40"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {calculateCourseDuration(enroll)}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {progressArray[index] &&
                      `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLecture} `}{" "}
                    Lectures
                  </td>

                  <td className="px-6 py-4">
                    <button onClick={() => navigate("/player/" + enroll._id)}>
                      {" "}
                      {progressArray[index]?.lectureCompleted ===
                      progressArray[index]?.totalLecture ? (
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                          Completed
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                          On Going
                        </span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
              {enrolledCourses.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-8 text-center text-gray-500 italic"
                  >
                    No enrollments yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
