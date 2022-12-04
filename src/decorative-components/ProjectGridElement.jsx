import React from "react";
import BadgeTechMini from "./BadgeTechMini";
import { Link } from "react-router-dom";

function ProjectGridElement(props) {
  return (
    <Link to={`/projects/${props.linkName}`}>
      <div className="p-6 border-2 border-secondary-lightest flex flex-col md:flex-row gap-8 items-start rounded-lg project-grid-element h-full">
        <div className="w-full aspect-video rounded-lg project-grid-element-image">
          <img
            className="rounded-lg w-full aspect-video object-cover"
            src={props.image}
          />
        </div>
        <div className="w-full">
          <div className="text-4xl text-center sm:text-left font-serif font-medium py-2 text-secondary-dark">
            {props.name}
          </div>
          <div className="text-xl text-justify font-thin">
            <div className="flex mb-2 gap-1.5 w-full justify-center sm:justify-start">
              {props.techBadges.map((e) => {
                return <BadgeTechMini logo={e} />;
              })}
            </div>
            {props.desc}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectGridElement;
