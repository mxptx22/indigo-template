import React from "react";
import ProjectScreenshot1 from "../../assets/screenshots/project-1.png";
import ProjectScreenshot2 from "../../assets/screenshots/project-2.png";
import {
  ProjectPageModel,
  ProjectPageHeadings,
  ProjectPageTechBadges,
} from "../models/ProjectPageModel";

function Project4() {
  return (
    <>
      <ProjectPageModel
        title="Project 4"
        linkPreview=""
        linkGithub=""
        screenshot1={ProjectScreenshot1}
        screenshot2={ProjectScreenshot2}>
        <ProjectPageHeadings title="What is it?">
          Sit sunt eiusmod non ullamco magna pariatur exercitation.
          Reprehenderit mollit aute deserunt quis sunt do aliqua pariatur sunt.
          Deserunt qui commodo aute est qui Lorem excepteur est. Nisi sint
          occaecat mollit labore in dolore tempor fugiat dolor mollit. Aliqua et
          id pariatur aliquip excepteur laboris excepteur officia et aliquip
          veniam ullamco dolor.
        </ProjectPageHeadings>
        <ProjectPageHeadings title="What did it teach me?">
          <ul className="text-justify">
            <li>
              Aute elit labore consequat enim nostrud nisi officia consequat
              tempor eiusmod..
            </li>
            <li>Ipsum laborum laboris voluptate occaecat qui aliquip..</li>
            <li>
              Sint ullamco duis ea adipisicing aute aute officia veniam aliqua
              laboris..
            </li>
            <li>Exercitation mollit ex magna et adipisicing sint..</li>
          </ul>
        </ProjectPageHeadings>
        <ProjectPageHeadings title="What did I use?">
          <ProjectPageTechBadges
            techBadges={[
              { name: "Javascript", logo: "js" },
              { name: "HTML", logo: "html" },
              { name: "CSS", logo: "css" },
            ]}
          />
        </ProjectPageHeadings>
      </ProjectPageModel>
    </>
  );
}

export default Project4;
