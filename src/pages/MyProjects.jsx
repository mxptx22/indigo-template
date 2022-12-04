import React, { useEffect } from "react";

import ProjectIcon from "../assets/aux-icons/ProjectIcon";

import SubpageModel from "./models/SubpageModel";
import ProjectGridElement from "../decorative-components/ProjectGridElement";
import ProjectScreenshot1 from "../assets/screenshots/project-1.png";
import ProjectScreenshot2 from "../assets/screenshots/project-2.png";

function MyProjects() {
  return (
    <>
      <SubpageModel title="Projects" icon={<ProjectIcon />}>
        <div className="grid xl:grid-cols-2 w-full gap-16 justify-around auto-rows-fr">
          <ProjectGridElement
            linkName="one"
            image={ProjectScreenshot2}
            name="Project 1"
            techBadges={["react", "js", "html", "css"]}
            desc="Minim incididunt in anim eiusmod Lorem anim consequat cupidatat ullamco exercitation."
          />
          <ProjectGridElement
            linkName="two"
            image={ProjectScreenshot1}
            name="Project 2"
            techBadges={["react", "js", "html", "css"]}
            desc="Ex minim ullamco sint laborum ut veniam adipisicing in."
          />
          <ProjectGridElement
            linkName="three"
            image={ProjectScreenshot1}
            name="Project 3"
            techBadges={["js", "html", "css"]}
            desc="Aute ut incididunt ullamco dolore proident aute nulla ad deserunt eu ipsum voluptate."
          />
          <ProjectGridElement
            linkName="four"
            image={ProjectScreenshot2}
            name="Project 4"
            techBadges={["react", "js", "html", "css"]}
            desc="Commodo nulla amet commodo adipisicing culpa ea consequat sit consectetur voluptate quis."
          />
        </div>
      </SubpageModel>
    </>
  );
}

export default MyProjects;
