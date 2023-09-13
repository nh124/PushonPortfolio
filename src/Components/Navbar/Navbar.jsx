import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="w-full h-[10vh] fixed z-30 flex justify-center">
      <div className="w-full h-full flex justify-center items-center relative">
        <div className="w-[80%] flex justify-between items-center flex-row px-3 py-3 bg-black/0">
          <div>
            <Link to="home" smooth={true} duration={500}>
              <img
                className="absolute top-0 left-[10%] w-[10%] max-md:left-0 max-md:w-[15%] max-sm:w-[30%] hover:cursor-pointer"
                src={Logo}
                alt=""
              />
            </Link>
          </div>
          <ul className="flex flex-row justify-center gap-6 text-xl  text-white uppercase max-md:hidden px-9">
            <li className="hover:cursor-pointer flex flex-row gap-2 group">
              <Link to="home" smooth={true} duration={500}>
                <span className="text-[#00E0FF]">//</span>
                <span className="group-hover:text-[#00E0FF] duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li className="hover:cursor-pointer flex flex-row gap-2 group">
              <Link to="experience" smooth={true} duration={500}>
                <span className="text-[#00E0FF]">//</span>
                <span className="group-hover:text-[#00E0FF] duration-300">
                  Experience
                </span>
              </Link>
            </li>
          </ul>
          <BiMenuAltRight
            onClick={() => setShowSideBar(true)}
            size={40}
            color="white"
            className="hidden max-md:flex"
          />
        </div>
      </div>
      <div
        className={`w-full h-screen absolute top-0 right-0 max-md:${
          showSideBar ? "flex" : "hidden"
        } hidden flex-col bg-[#0e131b] text-white`}
      >
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-row justify-center items-center">
            <Link to="home" smooth={true} duration={500} className="w-[20%]">
              <img className=" hover:cursor-pointer" src={Logo} alt="" />
            </Link>
            <div className="w-1/2 flex  items-center text-5xl max-sm:text-2xl">
              <span>
                <span className="text-blue-400"> S</span>
                al
                <span className="text-blue-400"> M</span>
                onzoor{" "}
              </span>
            </div>
            <div onClick={() => setShowSideBar(false)}>
              <MdClose className="max-sm:w-[60%]" size={50} color="white" />
            </div>
          </div>
          <div className="w-[70%] h-[2px] bg-blue-200"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[20%] max-sm:h-[40%]">
          <ul className="text-center text-3xl gap-3 flex flex-col w-[40%] max-sm:w-[70%] max-sm:text-lg">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-full"
              onClick={() => setShowSideBar(false)}
            >
              <li className="py-5 hover:bg-blue-400 border border-blue-400">
                Home
              </li>
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="w-full"
              onClick={() => setShowSideBar(false)}
            >
              <li className="py-5 hover:bg-blue-400 border border-blue-400">
                Experiences
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
