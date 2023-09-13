import { React, useState, useEffect } from "react";
import { experienceList } from "./ExperiencesList";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const VExp = () => {
  return (
    <div
      name="experience"
      className="w-full h-auto bg-[#282C33] justify-center hidden max-lg:flex relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full bg-[#282C33] flex flex-col justify-center items-center z-0 max-sm:bg-[#282C33]">
        <div className="w-0 h-full absolute bg-[#71797E]"></div>
        {experienceList.slice(0, 4).map((exp, index) => {
          return (
            <div key={index} className="w-full h-full flex flex-col relative">
              <img
                key={index}
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] "
                src={exp.Image}
                alt=""
              />
            </div>
          );
        })}
        <div className="absolute w-[80%] h-full top-0 bg-black/70 max-sm:w-full"></div>
      </div>
      <div className="w-[80%] h-full bg-[#282C33] flex flex-col max-sm:w-full">
        <div className="w-full h-full flex flex-row justify-center gap-2 py-[10%] relative font-firaCode text-white">
          <div className="w-full flex flex-row justify-center relative">
            {/* <OneExperience /> */}
            <div className={`w-full h-full flex flex-col items-center px-10}`}>
              {experienceList.slice(0, 4).map((exp, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full h-[100%] flex flex-row gap-[10%] relative`}
                  >
                    <div className="w-full h-full hidden">
                      <img
                        className="w-full h-full object-contain"
                        src={exp.Image}
                        alt=""
                      />
                    </div>
                    {index === 0 && (
                      <div className="absolute bottom-0 left-[5%] h-[90%] w-[2px] bg-white max-sm:left-[6%]"></div>
                    )}
                    {index !== 0 && index !== 3 && (
                      <div className="absolute bottom-0 left-[5%] h-full w-[2px] bg-white max-sm:left-[6%]"></div>
                    )}
                    {index === 3 && (
                      <div className="absolute top-0 left-[5%] h-[90%] w-[2px] bg-white max-sm:left-[6%]"></div>
                    )}
                    <div className="absolute left-[4.3%] top-[49%] w-[15px] h-[15px] bg-white rounded-full"></div>
                    <div className="w-full h-auto flex flex-col text-xs text-center py-6 gap-[15%] relative px-[10%]">
                      {exp.description.slice(0, 2).map((des, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-3 justify-center items-center "
                          >
                            <div className="flex flex-col">
                              <span className="font-bold text-sm text-[#9295e7]">
                                {des.Position}
                              </span>
                              <span className="text-teal-400">{des.Date}</span>
                            </div>
                            <div className="w-[40%] h-[2px] bg-teal-400"></div>
                            <ul className="list-disc px-6 text-left">
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

export default VExp;
