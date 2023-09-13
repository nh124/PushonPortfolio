import React from "react";
import ReactImage from "./Assets/React.png";
import HTML from "./Assets/HTML.png";
import PowerBI from "./Assets/PowerBI.png";
import MySQL from "./Assets/MySQL.png";
import GIT from "./Assets/GIT.png";

const Skills = () => {
  return (
    <div className="w-full h-[50vh] bg-[#71797E] flex justify-center">
      <div className="w-[80%] h-full bg-[#282C33] flex flex-col items-center">
        <div className="w-full h-[30%] flex justify-end items-center px-[10%] text-[#9697B0] text-5xl gap-10 bg-[#4D5255]">
          <div className="w-[80%] h-[5px] bg-[#9697B0]"></div>
          <span>Skills</span>
          <div className="w-[80%] h-[5px] bg-[#9697B0]"></div>
        </div>
        <div className="w-[90%] h-[70%] flex flex-row  justify-between items-center px-3 py-3 gap-3">
          <img
            className="w-[15%] hover:shadow-xl hover:shadow-[#00BCD4] duration-300"
            src={ReactImage}
            alt=""
          />
          <img
            className="w-[15%] hover:shadow-xl hover:shadow-[#FF7816]"
            src={HTML}
            alt=""
          />
          <img
            className="w-[15%] hover:shadow-xl  hover:shadow-[#FFC900]"
            src={PowerBI}
            alt=""
          />
          <img
            className="w-[15%] hover:shadow-xl  hover:shadow-[#1F9ABB] "
            src={MySQL}
            alt=""
          />
          <img
            className="w-[15%] hover:shadow-xl  hover:shadow-[#FEA000] "
            src={GIT}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
