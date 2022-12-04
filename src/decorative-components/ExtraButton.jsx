import React from "react";
import ProjectIcon from "../assets/aux-icons/ProjectIcon";
import MessageIcon from "../assets/aux-icons/MessageIcon";
import ResumeIcon from "../assets/aux-icons/ResumeIcon";
import GithubIcon from "../assets/aux-icons/GithubIcon";
import LinkedinIcon from "../assets/aux-icons/LinkedinIcon";
import HomeIcon from "../assets/aux-icons/HomeIcon";
import PreviewIcon from "../assets/aux-icons/PreviewIcon";

export const IconButton = (props) => {
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
      return <GithubIcon />;
    }
    if (input == 5) {
      return <LinkedinIcon />;
    }
    if (input == 6) {
      return <HomeIcon />;
    }
    if (input == 7) {
      return <PreviewIcon />;
    } else {
      return "";
    }
  };
  return (
    <div className={`btn-extra btn-extraIcon ${props.classNames}`}>
      <div className="h-full ">{selectIcon(props.icon)}</div>
    </div>
  );
};

export const WideButton = (props) => {
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
      return <GithubIcon />;
    }
    if (input == 5) {
      return <LinkedinIcon />;
    }
    if (input == 6) {
      return <HomeIcon />;
    }
    if (input == 7) {
      return <PreviewIcon />;
    } else {
      return "";
    }
  };
  return (
    <div className={`btn-extra btn-extraWide ${props.classNames}`}>
      <div className="h-full btn-extra-icon">{selectIcon(props.icon)}</div>
      <div className="btn-extra-text">{props.text}</div>
    </div>
  );
};

export const SmallWideButton = (props) => {
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
      return <GithubIcon />;
    }
    if (input == 5) {
      return <LinkedinIcon />;
    }
    if (input == 6) {
      return <HomeIcon />;
    }
    if (input == 7) {
      return <PreviewIcon />;
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="btn-pill text-lg text-secondary-dark fill fill-secondary-light border-secondary-lightest hover:after:bg-secondary-dark flex-1 justify-center items-center">
        <div className="h-6 fill-inherit">{selectIcon(props.icon)}</div>
        <div>{props.text}</div>
      </div>
    </>
  );
};
