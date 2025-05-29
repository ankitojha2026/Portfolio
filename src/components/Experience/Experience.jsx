import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line for desktop */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative flex flex-col sm:flex-row items-center justify-center mb-20 z-10`}
            >
              {/* Spacer for layout alignment */}
              {isLeft && <div className="hidden sm:block w-1/2"></div>}

              {/* Timeline Circle */}
              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex items-center justify-center z-20 mb-6 sm:mb-0">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`w-full sm:w-[45%] bg-gray-900 border border-white rounded-2xl shadow-2xl backdrop-blur-md p-6 sm:p-8 ${
                  isLeft ? "sm:ml-auto" : "sm:mr-auto"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <h4 className="text-sm text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{exp.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for layout alignment */}
              {!isLeft && <div className="hidden sm:block w-1/2"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
