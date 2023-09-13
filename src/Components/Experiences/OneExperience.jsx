import { React, useState } from "react";
import { experienceList } from "./ExperiencesList";
import { TbChevronCompactLeft } from "react-icons/tb";

const OneExperience = (des) => {
  return (
    <div>
      {des?.map((des, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col">
              <span>{des.Date}</span>
              <span>{des.Position}</span>
              <ul className="list-disc px-6">
                {des.task.map((task, index) => {
                  return <li key={index}>{task}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneExperience;
