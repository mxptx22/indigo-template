import React from "react";
import ExpressIcon from "./ExpressIcon";
import HTMLIcon from "./HTMLIcon";
import JSIcon from "./JSIcon";
import MongoIcon from "./MongoIcon";
import ReactIcon from "./ReactIcon";
import CSSIcon from "./CSSIcon";
import NodeIcon from "./NodeIcon";

function BadgeTechMini(props) {
  const selectTech = (input) => {
    if (input == "react") {
      return [<ReactIcon />, "React"];
    }
    if (input == "mongodb") {
      return [<MongoIcon />, "MongoDB"];
    }
    if (input == "css") {
      return [<CSSIcon />, "CSS"];
    }
    if (input == "html") {
      return [<HTMLIcon />, "HTML"];
    }
    if (input == "express") {
      return [<ExpressIcon />, "ExpressJS"];
    }
    if (input == "js") {
      return [<JSIcon />, "Javascript"];
    }
    if (input == "node") {
      return [<NodeIcon />, "NodeJS"];
    } else {
      return "";
    }
  };

  return (
    <>
      <div
        title={selectTech(props.logo)[1]}
        className="btn-pill btn-pill-mini text-xs text-secondary-dark fill fill-secondary-light border-secondary-lightest hover:after:bg-secondary-dark">
        <div className="h-5 fill-inherit">{selectTech(props.logo)[0]}</div>
      </div>
    </>
  );
}

export default BadgeTechMini;
