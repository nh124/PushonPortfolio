import { React } from "react";
import { FcGraduationCap } from "react-icons/fc";
import { BiLogoGithub } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import LogoNick from "./Assets/LogoNick.png";
import LogoL from "./Assets/M.png";
import PPhoto from "./Assets/PPhoto.png";
import Contact from "../Contact/Contact.jsx";
import Resume from "./Assets/Resume.pdf";

const Home = ({ bioStatus, setBioStatus, setShowSideBar }) => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-[#333333] flex justify-center relative overflow-hidden"
      >
        {bioStatus && <Contact setBioStatus={setBioStatus} />}
        <div className="w-[80%] h-full bg-[#282C33] relative text-white max-md:w-full z-0">
          <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
            {/* cdc */}
            <div className="w-full h-full flex justify-center items-end overflow-hidden py-5 max-lg:items-start max-lg:mt-[20%]">
              <div className="w-full h-[60%] flex flex-row max-lg:flex-col max-lg:h-full">
                <div className="w-full h-full flex flex-col justify-start py-3 gap-3">
                  <div className="flex flex-col px-5">
                    <span className="text-5xl font-firaCode min-[3000px]:text-7xl max-lg:text-3xl max-sm:text-lg">
                      I'm Salah Monzoor
                    </span>
                    <span className="text-5xl font-firaCode min-[3000px]:text-7xl max-lg:text-3xl max-sm:text-lg">
                      A{" "}
                      <span className="text-[#00E0FF] max-sm:text-lg">
                        Project Manager{" "}
                      </span>
                    </span>
                  </div>
                  <span className="font-firaCode max-[4002px]:text-base text-gray-400 px-5 max-lg:text-sm">
                    Associate-level professional trained in project management
                    with 3+ years professional experience
                  </span>
                  {/* icons */}
                  <div className="flex flex-row items-center gap-4 ml-4">
                    <a
                      target="_blank"
                      href="https://linkedin.com/in/salah-monzoor1"
                      className="hover:cursor-pointer"
                    >
                      <GrLinkedin size={40} color="#00E0FF" />
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/salzm"
                      className="hover:cursor-pointer"
                    >
                      <BiLogoGithub size={50} color="#00E0FF" />
                    </a>

                    <a download={"Resume"} href={Resume} target="_blank">
                      <CgProfile size={50} color="#00E0FF" />
                    </a>
                  </div>
                  <button
                    className="w-[250px] h-[50px] text-white text-3xl border border-[#00E0FF] ml-4 mt-5 max-sm:w-[150px] max-sm:text-base max-sm:h-[40px] relative group z-30"
                    onClick={() => setBioStatus(true)}
                  >
                    <div className="absolute top-0 left-0 w-0 h-full bg-[#00E0FF] z-0 group-hover:w-full duration-300"></div>
                    <span className="relative z-10 group-hover:text-[#2b6066]">
                      Contact Me!!
                    </span>
                  </button>
                </div>
                <div className="relative w-full h-full grid grid-cols-2">
                  <div className="absolute w-[200%] h-[130%]  bottom-0 flex left-1/2 transition -translate-x-1/2 z-10">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={PPhoto}
                      alt=""
                    />
                    <span className="absolute bottom-0 right-[30%] w-[40%] px-3 py-3 flex flex-row items-center gap-6 bg-[#1a1d22] border border-[#00E0FF] max-lg:text-sm max-sm:text-xs">
                      <FcGraduationCap size={40} />
                      <span>
                        GSU Graduate aspiring to be a Frontend Developer!
                      </span>
                    </span>
                  </div>
                  <div className="relative z-0">
                    <img
                      className="absolute left-1/2 transition -translate-x-[80%] top-1/2 -translate-y-1/2 max-[4002px]:w-[70%] max-lg:w-[50%] max-lg:-translate-x-[40%]"
                      src={LogoNick}
                      alt=""
                    />
                  </div>
                  <div className="relative z-0">
                    <img
                      className="absolute left-1/2 transition -translate-x-[50%] top-1/2 -translate-y-[90%] max-[4002px]:w-[70%] max-lg:w-[50%] max-lg:-translate-x-[80%] max-sm:w-[40%] max-sm:-translate-y-[70%]"
                      src={LogoL}
                      alt=""
                    />
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
