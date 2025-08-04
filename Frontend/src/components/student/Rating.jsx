import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`text-2xl sm:text-3xl cursor-pointer transition-colors ${
              starValue <= (hover || rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
