import { React, useState, useEffect } from "react";
import { experienceList } from "./ExperiencesList";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Experiences = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#282C33] flex justify-center max-lg:hidden min-[3000px]:h-[150vh] max-[2000px]:h-[120vh]"
    >
      <div className="w-[80%] h-full bg-[#0e131b] flex flex-col max-[1900px]:w-[90%]">
        <div className="w-full h-full flex flex-row justify-center gap-2 py-[10%] relative font-firaCode text-white">
          <div className="w-full flex flex-row justify-center relative">
            {/* <OneExperience /> */}
            {console.log(window.innerWidth)}
            <div className={`w-full h-full flex flex-row px-10}`}>
              {experienceList.slice(0, 4).map((exp, index) => {
                return (
                  <div
                    key={index}
                    className={`w-1/4 h-auto flex flex-col justify-start gap-[10%] relative`}
                  >
                    <div className="w-full h-[30%] min-[2000px]:h-[60%] min-[2600px]:h-[40%] min-[1700px]:h-[45%]">
                      <img
                        className="w-full h-full object-cover"
                        src={exp.Image}
                        alt=""
                      />
                    </div>

                    {index === 0 && (
                      <div className="absolute right-0 top-[35%] min-[2600px]:top-[45%] min-[2000px]:top-[55%] max w-[90%] h-[2px] bg-white min-[1700px]:top-[45%]"></div>
                    )}
                    {index !== 0 && index !== 3 && (
                      <div className="absolute right-0 top-[35%] min-[2600px]:top-[45%] min-[2000px]:top-[55%] w-full h-[2px] bg-white min-[1700px]:top-[45%]"></div>
                    )}
                    {index === 3 && (
                      <div className="absolute left-0 top-[35%] min-[2600px]:top-[45%] min-[2000px]:top-[55%] w-[90%] h-[2px] bg-white min-[1700px]:top-[45%]"></div>
                    )}
                    <div className="absolute top-[34.4%] left-1/2 min-[2600px]:top-[44.5%] min-[2000px]:top-[54%] w-[15px] h-[15px] bg-white rounded-full min-[1700px]:top-[44%]"></div>
                    <div className="w-full h-[20%] flex flex-col text-xs text-center py-6 gap-[15%]">
                      {exp.description.slice(0, 2).map((des, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-3 items-center"
                          >
                            <div className="flex flex-col">
                              <span className="font-bold text-sm text-[#9295e7] min-[3000px]:text-lg">
                                {des.Position}
                              </span>
                              <span className="text-teal-400 min-[3000px]:text-lg">
                                {des.Date}
                              </span>
                            </div>
                            <div className="w-[40%] h-[2px] bg-teal-400"></div>
                            <ul className="list-disc px-6 text-left max-xl:text-[10px] min-[3000px]:text-base">
                              {des.task.map((task, index) => {
                                return <li key={index}>{task}</li>;
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
