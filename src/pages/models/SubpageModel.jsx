import React, { useEffect } from "react";
import patternSprinkles from "../../assets/pattern.svg";
import Contact from "../../frontpage-components/Contact";
import BackButton from "../../decorative-components/BackButton";
import { Link, useNavigate } from "react-router-dom";
import LogoContainer from "../../decorative-components/LogoContainer";
import Navbar from "../../decorative-components/Navbar";

function SubpageModel(props, { children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-base min-h-screen overflow-hidden">
        <div id="background-container" className="relative w-screen h-[20vh]">
          <div
            id=" background"
            className="absolute h-full w-full"
            style={{
              background: `url('${patternSprinkles}')`,
              backgroundRepeat: "repeat",
            }}></div>
          <Navbar />
        </div>
        <div
          id="page-ident-container"
          className="-mt-[6vh] flex flex-col gap-4 items-center">
          <div
            id="page-icon"
            className="h-24 sm:h-48 aspect-square text-primary">
            {props.icon}
          </div>
          <div
            id="page-title"
            className="text-7xl sm:text-9xl my-2 font-serif font-semibold myname-text px-12 text-center">
            {props.title}
          </div>
          <div className="h-10 w-full bg-gradient-to-b from-base-darker to bg-base rounded-xl"></div>
        </div>
        <div className="p-4 sm:px-12 pt-12 pb-36">{props.children}</div>
      </div>
      <Contact />
    </>
  );
}

export default SubpageModel;
