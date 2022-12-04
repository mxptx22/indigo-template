import React from "react";
import SectionButton from "../decorative-components/SectionButton";

import ProjectScreenshot1 from "../assets/screenshots/project-1.png";
import ProjectScreenshot2 from "../assets/screenshots/project-2.png";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { Link } from "react-router-dom";
import NodeIcon from "../decorative-components/NodeIcon";
import ExpressIcon from "../decorative-components/ExpressIcon";
import MongoIcon from "../decorative-components/MongoIcon";
import JSIcon from "../decorative-components/JSIcon";
import ReactIcon from "../decorative-components/ReactIcon";
import HTMLIcon from "../decorative-components/HTMLIcon";
import CSSIcon from "../decorative-components/CSSIcon";

function MyProjects() {
  return (
    <>
      <Controller>
        <Scene
          duration={"200%"}
          triggerHook="0"
          pinSettings={{ pushFollowers: false }}
          pin>
          {(progress) => (
            <div className="text-accent-lightest px-4 py-8 sm:p-12 w-screen">
              <Timeline paused>
                <Timeline progress={progress * 4}>
                  <Tween
                    from={{ opacity: 0, scale: 0.9, x: "-5%" }}
                    to={{ opacity: 1, scale: 1, x: 0 }}>
                    <div
                      id="myprojects-heading"
                      className=" text-6xl sm:text-7xl font-serif">
                      My Projects
                    </div>
                  </Tween>
                </Timeline>
                <Timeline progress={progress * 2}>
                  <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-6 p-10 items-center">
                    {/* Start of Gallery */}

                    {/* Element 1 */}
                    <Tween from={{ x: "-50%" }} to={{ opacity: 1, x: 0 }}>
                      <a
                        href="/projects/one"
                        className="highlighted-project-grid-element ">
                        <Timeline progress={progress} paused>
                          <Tween
                            from={{ height: 0, opacity: 0 }}
                            to={{ height: "auto", opacity: 1 }}>
                            <div
                              id="project-1-techs-container"
                              className="highlighted-project-grid-element-techs-container">
                              <div
                                title="NodeJS"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <NodeIcon />
                              </div>
                              <div
                                title="ExpressJS"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <ExpressIcon />
                              </div>
                              <div
                                title="MongoDB"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <MongoIcon />
                              </div>
                              <div
                                title="Javascript"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <JSIcon />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                        <div id="project-1-photo-container w-full">
                          <div
                            className="highlighted-project-grid-element-image"
                            style={{
                              backgroundImage: `url(${ProjectScreenshot1})`,
                            }}></div>
                          <div className="text-2xl font-sc font-light lowercase leading-6 tracking-wide">
                            Project 1
                          </div>
                        </div>
                      </a>
                    </Tween>

                    {/* Element 2 */}
                    <Tween from={{ x: "-50%" }} to={{ opacity: 1, x: 0 }}>
                      <a
                        href="/projects/two"
                        className="highlighted-project-grid-element ">
                        <Timeline progress={progress} paused>
                          <Tween
                            from={{ height: 0, opacity: 0 }}
                            to={{ height: "auto", opacity: 1 }}>
                            <div
                              id="project-1-techs-container"
                              className="highlighted-project-grid-element-techs-container">
                              <div
                                title="React"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <ReactIcon />
                              </div>
                              <div
                                title="Javascript"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <JSIcon />
                              </div>
                              <div
                                title="HTML"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <HTMLIcon />
                              </div>
                              <div
                                title="CSS"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <CSSIcon />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                        <div id="project-1-photo-container w-full">
                          <div
                            className="highlighted-project-grid-element-image"
                            style={{
                              backgroundImage: `url(${ProjectScreenshot2})`,
                            }}></div>
                          <div className="text-2xl font-sc font-light lowercase leading-6 tracking-wide">
                            Project 2
                          </div>
                        </div>
                      </a>
                    </Tween>

                    {/* Element 3 */}
                    <Tween from={{ x: "-50%" }} to={{ opacity: 1, x: 0 }}>
                      <a
                        href="/projects/three"
                        className="highlighted-project-grid-element ">
                        <Timeline progress={progress} paused>
                          <Tween
                            from={{ height: 0, opacity: 0 }}
                            to={{ height: "auto", opacity: 1 }}>
                            <div
                              id="project-1-techs-container"
                              className="highlighted-project-grid-element-techs-container">
                              <div
                                title="Javascript"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <JSIcon />
                              </div>
                              <div
                                title="HTML"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <HTMLIcon />
                              </div>
                              <div
                                title="CSS"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <CSSIcon />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                        <div id="project-1-photo-container w-full">
                          <div
                            className="highlighted-project-grid-element-image"
                            style={{
                              backgroundImage: `url(${ProjectScreenshot1})`,
                            }}></div>
                          <div className="text-2xl font-sc font-light lowercase leading-6 tracking-wide">
                            Project 3
                          </div>
                        </div>
                      </a>
                    </Tween>

                    {/* Element 4 */}
                    <Tween from={{ x: "-50%" }} to={{ opacity: 1, x: 0 }}>
                      <a
                        href="/projects/four"
                        className="highlighted-project-grid-element">
                        <Timeline progress={progress} paused>
                          <Tween
                            from={{ height: 0, opacity: 0 }}
                            to={{ height: "auto", opacity: 1 }}>
                            <div
                              id="project-1-techs-container"
                              className="highlighted-project-grid-element-techs-container">
                              <div
                                title="React"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <ReactIcon />
                              </div>
                              <div
                                title="Javascript"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <JSIcon />
                              </div>
                              <div
                                title="HTML"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <HTMLIcon />
                              </div>
                              <div
                                title="CSS"
                                className="h-8 m-2 p-1 aspect-square bg-accent rounded">
                                <CSSIcon />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                        <div id="project-1-photo-container w-full">
                          <div
                            className="highlighted-project-grid-element-image"
                            style={{
                              backgroundImage: `url(${ProjectScreenshot2})`,
                            }}></div>
                          <div className="text-2xl font-sc font-light lowercase leading-6 tracking-wide">
                            Project 4
                          </div>
                        </div>
                      </a>
                    </Tween>

                    {/* End of Gallery */}
                  </div>
                  <Tween
                    from={{ opacity: 0, y: 100 }}
                    to={{ opacity: 1, y: 0 }}>
                    <div className="flex justify-center w-full mt-5">
                      <Link
                        to="/projects"
                        className={`border-accent-darker text-accent fill-accent text-accent-dark fill-dark h-6 text-xl font-extralight`}>
                        <SectionButton text="See all" icon={3} />
                      </Link>
                    </div>
                  </Tween>
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      <div className="h-[200vh]"></div>
    </>
  );
}

export default MyProjects;
