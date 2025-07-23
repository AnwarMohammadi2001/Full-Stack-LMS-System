import React from "react";
import assets, { dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Testimonials
      </h2>
      <p className="md:text-base text-gray-500 mt-3 text-center max-w-2xl mx-auto">
        This platform has transformed my learning experience! The courses are
        well-structured and the educators are incredibly knowledgeable. Highly
        recommend!
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyTestimonial.map((test, index) => (
          <div
            key={index}
            className="text-sm border text-left border-gray-300 pb-4 rounded-lg bg-white shadow-md hover:shadow-lg transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100 rounded-t-lg">
              <img
                src={test.image}
                alt={test.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {test.name}
                </h4>
                <p className="text-gray-600 text-sm">{test.role}</p>
              </div>
            </div>

            {/* Stars & Feedback */}
            <div className="px-5 my-3 text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="w-4 h-4"
                    src={
                      i < Math.floor(test.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="Star"
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-3">{test.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline   px-5">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
