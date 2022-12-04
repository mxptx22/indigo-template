import React from "react";
import SubpageModel from "./SubpageModel";
import ProjectIcon from "../../assets/aux-icons/ProjectIcon";
import { SmallWideButton } from "../../decorative-components/ExtraButton";
import BadgeTech from "../../decorative-components/BadgeTech";

export function ProjectPageHeadings(props, { children }) {
  return (
    <>
      <div className="max-w-3xl">
        <div className="text-4xl py-2 text-secondary-dark font-accent">
          {props.title}
        </div>
        <div className="py-2 mb-2 text-xl leading-9 text-justify">
          {props.children}
        </div>
      </div>
    </>
  );
}

export function ProjectPageTechBadges(props) {
  return (
    <>
      <div className="text-xl text-justify font-thin">
        <div className="flex flex-wrap my-2 gap-1.5">
          {props.techBadges.map((e) => {
            return <BadgeTech logo={e.logo} name={e.name} />;
          })}
        </div>
      </div>
    </>
  );
}

export function ProjectPageModel(props, { children }) {
  return (
    <>
      <SubpageModel title={props.title} icon={<ProjectIcon />}>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-8 justify-between">
          <div className="w-full">{props.children}</div>
          <div className="w-full md:max-w-md xl:max-w-lg items-center flex flex-col gap-8">
            <div className="flex gap-2 max-w-md w-full">
              <a href={props.linkPreview} className="flex-1">
                <SmallWideButton text="Preview Live" icon={7} />
              </a>
              <a href={props.linkGithub} className="flex-1">
                <SmallWideButton text="See on GitHub" icon={4} />
              </a>
            </div>
            <div className="project-page-image-container max-w-lg">
              <img
                className="rounded-lg w-full max-w-lg"
                src={props.screenshot1}
              />
            </div>
            <div className="project-page-image-container max-w-lg hidden lg:block">
              <img
                className="rounded-lg w-full max-w-lg"
                src={props.screenshot2}
              />
            </div>
          </div>
        </div>
      </SubpageModel>
    </>
  );
}
