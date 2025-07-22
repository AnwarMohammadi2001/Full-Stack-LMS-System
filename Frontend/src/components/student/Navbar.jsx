import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import assets from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignUp } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 shadow-md ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        {user && (
          <>
            <button>Become Educator</button>
            <Link to="/my-enrollments">| My Enrollments</Link>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignUp()}
            className="bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">| My Enrollments</Link>
            </>
          )}
        </div>

        <button>
          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignUp()}>
              <img src={assets.user_icon} alt="" />
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
