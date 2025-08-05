import React, { use } from "react";
import assets, { dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <img
        src={assets.logo}
        onClick={() => navigate("/")}
        alt="logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img src={assets.profile_img} alt="" className="max-w-8" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
