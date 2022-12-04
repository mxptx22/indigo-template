import React, { useState, useEffect } from "react";
import waveLight from "../assets/wave copy.svg";
import wave from "../assets/wave original.svg";
import waveStatic from "../assets/wave noanimation.svg";
import patternSprinkles from "../assets/pattern.svg";
import "../decorative-components/MyName.css";
import Waves from "../decorative-components/Waves";
import RenderInBrowser from "react-render-in-browser";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import SectionButton from "../decorative-components/SectionButton";
import LogoContainer from "../decorative-components/LogoContainer";

function Welcome(props) {
  const scrollSouth = () => {
    props.clickables.current.scrollIntoView();
  };

  const [luminosityState, setLuminosityState] = useState(false);
  const setLuminosity = ({ progress, velocity }) => {
    if (progress > 0.56) {
      setLuminosityState(true);
    } else {
      setLuminosityState(false);
    }
  };

  return (
    <>
      <div className="">
        <Controller>
          <Scene
            duration={"150%"}
            triggerHook="0"
            pinSettings={{ pushFollowers: false }}
            pin>
            {(progress) => (
              <div className=" h-screen ">
                <Timeline totalProgress={progress * 1} paused>
                  <Tween
                    from={{ opacity: "1" }}
                    to={{
                      height: "0%",
                      opacity: "0",
                    }}>
                    <div
                      className={`flex h-full flex-col items-center justify-between overflow-hidden bg-base text-primary-lighter ${
                        luminosityState ? "brighten-content" : ""
                      }`}>
                      <div
                        className="h-[33vh] p-4 sm:p-12 w-full flex justify-between -mb-[7vh]"
                        style={{
                          background: `url('${patternSprinkles}')`,
                          backgroundRepeat: "repeat",
                        }}>
                        <LogoContainer />
                        <div className="hidden sm:flex gap-2 sm:gap-5 flex-row-reverse h-min">
                          <div
                            onClick={scrollSouth}
                            className={`border-primary-lighter text-primary fill-primary h-6`}>
                            <SectionButton
                              text="Contact"
                              icon={1}
                              luminosity={luminosityState}
                            />
                          </div>
                          <Link to="/resume">
                            <div
                              className={`border-primary-lighter text-primary fill-primary h-6`}>
                              <SectionButton
                                text="Resume"
                                icon={2}
                                luminosity={luminosityState}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="h-[33vh] flex flex-col items-start justify-start w-full px-4 sm:px-12">
                        <Timeline totalProgress={progress * 33} paused>
                          <Tween
                            from={{ opacity: 1, display: "block" }}
                            to={{ opacity: 0, display: "block" }}>
                            <div className="text-lg min-[350px]:text-3xl sm:text-4xl md:text-5xl font-accent font-light md:mx-1">
                              Lorem Ipsum with 🌷
                            </div>
                          </Tween>
                          <div
                            className={`transitions-globalenabler text-5xl min-[350px]:text-7xl sm:text-8xl xl:text-9xl my-2 font-serif font-semibold myname-text ${
                              luminosityState ? "brighten-content-2" : ""
                            }`}>
                            John Doe
                          </div>
                          <Tween
                            from={{ opacity: 0, display: "block" }}
                            to={{ opacity: 1, display: "block" }}>
                            <div
                              className={`transitions-globalenabler w-full font-sc text-sm md:text-2xl font-normal text-secondary-light border-secondary-lightest ${
                                luminosityState ? "brighten-content" : ""
                              }`}>
                              <div className="flex flex-col min-[350px]:flex-row gap-4 border-inherit w-fit">
                                <div className="border-2 border-inherit py-0.5 px-3 rounded-xl">
                                  chip with text
                                </div>
                                <div className="border-2 border-inherit py-0.5 px-3  rounded-xl">
                                  chip with other text
                                </div>
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                      </div>
                      <div className="h-[33vh] w-full relative">
                        <RenderInBrowser safari only>
                          <object
                            className="absolute opacity-70 h-full w-full"
                            data={waveLight}></object>
                        </RenderInBrowser>
                        <RenderInBrowser chrome edge firefox only>
                          <object
                            className="absolute opacity-90 h-full w-full"
                            data={wave}></object>
                        </RenderInBrowser>
                        <RenderInBrowser mobile only>
                          <object
                            className="absolute h-[33vh] w-[220%]"
                            data={waveLight}></object>
                        </RenderInBrowser>
                        <RenderInBrowser
                          except
                          safari
                          chrome
                          edge
                          firefox
                          mobile>
                          <object
                            className="absolute h-[33vh] w-full"
                            data={waveStatic}></object>
                        </RenderInBrowser>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>
        </Controller>
        <ScrollTrigger onProgress={setLuminosity}></ScrollTrigger>
      </div>
      {/* <div className="h-[300vh]"></div> */}
    </>
  );
}

export default Welcome;
