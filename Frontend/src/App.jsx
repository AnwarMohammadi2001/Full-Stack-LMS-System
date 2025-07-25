import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import Player from "./pages/student/Player";
import MyEnrollments from "./pages/student/MyEnrollments";
import CourseDetailsPage from "./pages/student/CourseDetails";
import CourseDetails from "./pages/student/CourseDetails";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";

const App = () => {
  const isEducatoreRoute = useMatch("/educator/*");
  return (
    <div className=" min-h-screen bg-white">
      {!isEducatoreRoute && <Navbar />}
      {/* Navbar is not shown on educator routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Add more routes as needed */}
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-course" element={<MyCourses />} />
          <Route path="stunden-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
