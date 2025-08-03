import React from "react";

const MyEnrollments = () => {
  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollmets</h1>
        <table className="">
          <thead className="">
            <tr className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
              <th className="px-4 py-3 font-semibold truncate ">Course</th>
              <th className="px-4 py-3 font-semibold truncate ">Duration</th>
              <th className="px-4 py-3 font-semibold truncate ">Completed</th>
              <th className="px-4 py-3 font-semibold truncate ">Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default MyEnrollments;
