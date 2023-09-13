import scrible from "./Scrible.svg";

import React from "react";

const Scrible = ({ width, height, rotate, top, bottom, left, right }) => {
  let bt = bottom + 10;
  //   console.log(bt);
  return (
    <>
      <img
        className={`absolute top-[${top}px] bottom-[${bottom}] left-[${left}] right-[${right}] w-[${width}]`}
        src={scrible}
        alt=""
      />
    </>
  );
};

export default Scrible;
