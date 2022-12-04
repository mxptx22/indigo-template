import React from "react";
import ExpressIcon from "./ExpressIcon";
import HTMLIcon from "./HTMLIcon";
import JSIcon from "./JSIcon";
import MongoIcon from "./MongoIcon";
import ReactIcon from "./ReactIcon";
import CSSIcon from "./CSSIcon";
import NodeIcon from "./NodeIcon";

function BadgeTech(props) {
  const selectTech = (input) => {
    if (input == "react") {
      return <ReactIcon />;
    }
    if (input == "mongodb") {
      return <MongoIcon />;
    }
    if (input == "css") {
      return <CSSIcon />;
    }
    if (input == "html") {
      return <HTMLIcon />;
    }
    if (input == "express") {
      return <ExpressIcon />;
    }
    if (input == "js") {
      return <JSIcon />;
    }
    if (input == "node") {
      return <NodeIcon />;
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="btn-pill text-lg text-secondary-dark fill fill-secondary-light border-secondary-lightest hover:after:bg-secondary-dark">
        <div className="h-6 fill-inherit">{selectTech(props.logo)}</div>
        <div>{props.name}</div>
      </div>
    </>
  );
}

export default BadgeTech;
