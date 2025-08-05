import React, { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-start md:p-8 p-4 pt-8">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-semibold">Students Enrolled</h2>
        <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-300">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 border-b text-gray-600">
              <tr>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                  #
                </th>
                <th className="px-4 py-3 font-semibold">Student Name</th>
                <th className="px-4 py-3 font-semibold">Course Title</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                  Enrolled On
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {enrolledStudents.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-center sm:text-left"
                >
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 flex items-center justify-center sm:justify-start space-x-3">
                    <img
                      src={item.student.imageUrl}
                      alt="profile"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="truncate hidden md:inline-block">
                      {item.student.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.courseTitle}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {new Date(item.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
