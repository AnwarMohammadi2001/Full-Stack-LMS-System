import React, { useContext } from "react";
import assets from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  const rating = calculateRating(course);

  const discountedPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img
        src={course.courseThumbnail}
        alt={course.courseTitle}
        className="w-full object-cover"
      />

      {/* Content */}
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold mb-1">{course.courseTitle}</h3>
        <p className="text-sm text-gray-500">
          {course.educator?.name || "Unknown Educator"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span>{rating.toFixed(1)}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index < Math.floor(rating) ? assets.star : assets.star_blank
                }
                alt="rating"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <span className="text-gray-500">
            ({course.courseRating?.length || 0})
          </span>
        </div>

        {/* Price */}
        <p className="text-base font-semibold text-gray-800">
          {currency} {discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
