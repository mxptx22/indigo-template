import React from "react";

import BackIcon from "../assets/aux-icons/BackIcon";

function SectionButton(props) {
  return (
    <div
      className={`btn-back transitions-globalenabler ${
        props.luminosity ? "brighten-content" : ""
      }`}>
      <div className="h-[100%]">
        <BackIcon />
      </div>
    </div>
  );
}

export default SectionButton;
