import React, { useState } from "react";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/course-list/` + input);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSearch}
      className="max-w-xl w-full mx-auto md:h-14 h-12 flex items-center bg-white rounded border border-gray-500/20  "
    >
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="md:w-auto w-10 px-3 "
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="search for courses"
        className="w-full h-full outline-none text-gray-500/80"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="submit"
        className="bg-blue-600 rounded cursor-pointer text-white md:px-10 px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
