import React from "react";
import "../decorative-components/MyName.css";

function ScrollInfo() {
  return (
    <div className="fixed w-screen h-7 bg-primary-darkest z-50 text-white bannerAnimation-enabler invisible">
      <div className="h-full flex items-center justify-center ">
        <div className="font-bold text-sm uppercase tracking-wider">
          KEEP SCROLLING DOWN TO REVEAL MORE.
        </div>
      </div>
    </div>
  );
}

export default ScrollInfo;
