import { React, useState } from "react";
import Home from "./Components/Home/Home";

import Experiences from "./Components/Experiences/Experiences";
import Navbar from "./Components/Navbar/Navbar";
import VExp from "./Components/Experiences/VExp";
function App() {
  const [bioStatus, setBioStatus] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full h-screen relative">
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <Home
        setBioStatus={setBioStatus}
        bioStatus={bioStatus}
        setShowSideBar={setShowSideBar}
      />
      {/* <Skills /> */}

      {!bioStatus && <Experiences />}
      {!bioStatus && <VExp />}
    </div>
  );
}

export default App;
