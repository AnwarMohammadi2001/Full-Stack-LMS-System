import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import assets, { dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  // get data from database
  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col  justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5  ">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 p-5 shadow-md border border-blue-500 bg-white rounded-lg">
            <img src={assets.patients_icon} alt="icon" className="h-12 w-12" />
            <div>
              <p className="text-2xl font-bold text-gray-700">
                {dashboardData.enrolledStudentsData?.length || 0}
              </p>
              <p className="text-sm text-gray-500">Total Enrollments</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 shadow-md border border-blue-500 bg-white rounded-lg">
            <img
              src={assets.appointments_icon}
              alt="icon"
              className="h-12 w-12"
            />
            <div>
              <p className="text-2xl font-bold text-gray-700">
                {dashboardData.totalCourses}
              </p>
              <p className="text-sm text-gray-500">Total Course</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 shadow-md border border-blue-500 bg-white rounded-lg">
            <img src={assets.earning_icon} alt="icon" className="h-12 w-12" />
            <div>
              <p className="text-2xl font-bold text-gray-700">
                {" "}
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p className="text-sm text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>
        {/* Enrolled Students */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrolleds</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-fixed md:table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold text-center ">
                    Student Name
                  </th>
                  <th className="px-4 py-3 font-semibold text-center ">
                    Course Title
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b text-center border-gray-500/20"
                  >
                    <td className="px-4 py-3 text-center hidden sm:table-cell">
                      {index + 1}
                    </td>
                    <td className="md:px-4 px-2 py-3 flex text-center justify-center items-center space-x-3">
                      <img
                        src={item.student.imageUrl}
                        alt="profile"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="truncate">{item.student.name}</span>
                    </td>
                    <td className="px-4 py-3 truncate"> {item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
