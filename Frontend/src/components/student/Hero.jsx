import React from "react";
import assets from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small text-xl md:text-lg lg:text-5xl relative font-bold text-gray-800 max-w-3xl mx-auto">
        Empower your future the courses desigbed to{" "}
        <span className="text-blue-500">fit your choice.</span>
        <span className="text-blue-600">
          <img
            src={assets.sketch}
            alt="sketch"
            className="md:block hidden absolute -bottom-7 right-0"
          />
        </span>{" "}
      </h1>
      <p className="md:block hidden text-gray-500 text-lg max-w-2xl mx-auto">
        We bring together world-class instructors , interactive content, and a
        supportive community to help you achive your personal and professional
        goals.
      </p>
      <p className="md:hidden block text-gray-500 text-lg max-w-sm mx-auto">
        We bring together world-class instructors to help you achive your
        frofessional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
