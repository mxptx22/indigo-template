import React from "react";
import ProjectIcon from "../assets/aux-icons/ProjectIcon";
import MessageIcon from "../assets/aux-icons/MessageIcon";
import ResumeIcon from "../assets/aux-icons/ResumeIcon";
import SendIcon from "../assets/aux-icons/SendIcon";

function SectionButton(props) {
  const selectIcon = (input) => {
    if (input == 1) {
      return <MessageIcon />;
    }
    if (input == 2) {
      return <ResumeIcon />;
    }
    if (input == 3) {
      return <ProjectIcon />;
    }
    if (input == 4) {
      return <SendIcon />;
    } else {
      return "";
    }
  };

  return (
    <div
      className={`btn-underlined transitions-globalenabler ${
        props.luminosity ? "brighten-content" : ""
      }`}>
      <div className="text-md">{props.text}</div>
      <div className="h-[100%]">{selectIcon(props.icon)}</div>
    </div>
  );
}

export default SectionButton;
