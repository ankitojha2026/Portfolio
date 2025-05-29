import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line for larger screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center justify-center mb-20 z-10`}
            >
              {/* Spacer for desktop alignment */}
              {isLeft && <div className="hidden sm:block w-1/2"></div>}

              {/* Timeline Circle */}
              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 bg-gray-300 border-4 border-[#8245ec] rounded-full flex items-center justify-center z-20 mb-6 sm:mb-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card Content */}
              <div
                className={`w-full sm:w-[45%] bg-gray-900 border border-white rounded-2xl shadow-2xl backdrop-blur-md p-6 sm:p-8 ${
                  isLeft ? "sm:ml-auto" : "sm:mr-auto"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>

              {/* Spacer for desktop alignment */}
              {!isLeft && <div className="hidden sm:block w-1/2"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
