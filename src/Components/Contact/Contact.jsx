import React from "react";
import Photo from "./Photo.jpg";
import background from "./background.jpg";
import { MdOutlineClose } from "react-icons/md";

const Contact = ({ setBioStatus }) => {
  return (
    <div className="absolute top-0 w-full h-full bg-black/50 flex justify-center items-center z-40 text-white">
      <div className="w-[50%] h-[80%] bg-[#282C33] flex flex-row relative gap-3 items-center max-md:w-full max-md:h-full max-lg:w-[80%] max-lg:h-auto">
        <div className="w-full h-full bg-blue-400 absolute top-0 z-0">
          <img className="w-full h-full object-cover" src={background} alt="" />
        </div>

        <div className="w-full h-full bg-black/50 absolute top-0 z-10"></div>
        <div className="w-full h-full flex justify-center items-center z-20 max-lg:hidden">
          <img className="object-cover w-full h-full" src={Photo} alt="" />
        </div>

        <div className="relative w-full h-full flex flex-col gap-3 py-[7%] z-20 max-md:py-[30%]">
          <span className="py-3 px-3 text-2xl text-center flex flex-col gap-2 justify-center font-bold items-center max-sm:text-xl">
            <span className="flex flex-row gap-2 justify-center font-bold">
              <p>Hi My name is</p>
              <p className="text-[#00E0FF]">Sal!!</p>
            </span>
            <div className=" w-[70%] h-[2px] bg-white "></div>
          </span>
          <span className="px-10 py-3 max-sm:text-sm max-[375px]:text-xs">
            I'm an
            <span className="text-[#00E0FF] px-2 font-semibold">
              Associate-level professional
            </span>
            trained in project management with
            <span className="text-[#00E0FF] px-2 font-semibold">
              3+ years of professional experience
            </span>
            <ul className="list-disc px-4 py-2">
              <li>
                <span className="text-[#00E0FF] font-semibold mr-[5px]">
                  leading
                </span>
                projects
              </li>
              <li>
                <span className="text-[#00E0FF] font-semibold mr-[5px]">
                  Presenting
                </span>
                to clients & internal teams
              </li>
              <li>
                Working in sprints using
                <span className="text-[#00E0FF] font-semibold ml-[5px]">
                  Agile methodology.
                </span>
              </li>
            </ul>
            Currently Looking for a role in Technical Project Management, Web
            Development, and/or Business Analyst.
          </span>

          <form
            method="POST"
            action="https://getform.io/f/0ad6f7aa-5096-44f6-9de8-dcb0c39f2cdb"
            className="flex flex-col w-full h-full gap-3 px-3 py-3"
          >
            <div className="w-full h-auto flex flex-row gap-3">
              <input
                className="bg-[#0a192f] py-2 px-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="bg-[#0a192f] py-2 px-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="h-[40%]">
              <textarea
                name="message"
                rows="10"
                className="bg-[#0a192f]  py-2 px-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none h-full"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="h-[15%] flex flex-row justify-center items-center">
              <button
                className="text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-3 py-3 my-8 mx-auto flex items-center w-[140px] justify-center"
                duration={500}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          className="absolute top-5 right-5 z-20 group hover:cursor-pointer"
          onClick={() => {
            setBioStatus(false);
            console.log("Click!!");
          }}
        >
          <MdOutlineClose size={40} color={`group-hover:bg-blue-400`} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
