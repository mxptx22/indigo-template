import React from "react";
import ReactIcon from "../decorative-components/ReactIcon";
import ExpressIcon from "../decorative-components/ExpressIcon";
import NodeIcon from "../decorative-components/NodeIcon";
import MongoIcon from "../decorative-components/MongoIcon";
import JSIcon from "../decorative-components/JSIcon";
import HTMLIcon from "../decorative-components/HTMLIcon";
import CSSIcon from "../decorative-components/CSSIcon";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

function Technologies() {
  return (
    <>
      <div>
        <Controller>
          <div>
            <Scene
              duration={"300%"}
              triggerHook="0"
              pinSettings={{ pushFollowers: false }}
              pin>
              {(progress) => (
                <div className="w-screen h-screen py-8 overflow-hidden bg-black flex justify-center items-center absolute">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-16 p-4">
                    <Timeline paused>
                      <Tween
                        progress={progress * 1.75}
                        from={{
                          opacity: 0,
                          scale: 0.2,
                          x: "-100%",
                          skewX: "10%",
                        }}
                        to={{ opacity: 1, scale: 1, x: "0", skewX: "0%" }}
                        stagger={{ each: 0.5, from: "random" }}
                        ease="elastic.out(0.7, 0.5)">
                        <div className="h-32 sm:h-36 lg:h-[25vh]">
                          <HTMLIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh]">
                          <CSSIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh] ">
                          <JSIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh] ">
                          <ReactIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh] ">
                          <ExpressIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh] ">
                          <NodeIcon strokeColor={"#e0c9b8"} />
                        </div>
                        <div className="h-32 sm:h-36 lg:h-[25vh] ">
                          <MongoIcon strokeColor={"#e0c9b8"} />
                        </div>
                      </Tween>
                    </Timeline>
                  </div>
                </div>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
      <div className="h-[300vh]"></div>
    </>
  );
}

export default Technologies;
