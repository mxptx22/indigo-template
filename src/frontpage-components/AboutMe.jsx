import React from "react";
import AnimatedMe from "../decorative-components/AnimatedMe";
import BadgeTech from "../decorative-components/BadgeTech";
import SectionButton from "../decorative-components/SectionButton";
import { Link } from "react-router-dom";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

function AboutMe() {
  return (
    <>
      <div className="min-h-screen text-gray-900 px-4 py-8 sm:p-12">
        <Controller>
          <Scene duration={"33%"}>
            <Tween
              from={{ opacity: 0, y: 200, scale: 1.6 }}
              to={{ opacity: 1, y: 0, scale: 1 }}>
              <div>
                <div className="flex gap-4 justify-between mb-6 items-center">
                  <div className="text-6xl sm:text-7xl font-serif">
                    About{" "}
                    <span className="hidden min-[500px]:inline-block">Me</span>
                  </div>

                  <Link to="/resume" className="h-12 -mt-1 sm:mr-3">
                    <div className="border-gray-900 text-gray-900 fill-gray-900 h-6 text-sm sm:text-lg w-fit">
                      <SectionButton text="Resume" icon={2} />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col xl:flex-row w-full gap-6 py-6">
                  <div className="w-full">
                    <div className="text-4xl py-2 text-secondary-dark font-accent">
                      Hello!
                    </div>
                    <div className="text-xl sm:text-2xl py-2 mb-8 text-justify leading-10">
                      <p>Sint non nisi occaecat nostrud non amet.</p>

                      <p>
                        Laboris et ipsum consequat proident ea esse. Minim sunt
                        adipisicing sunt minim velit dolore aliquip
                        reprehenderit. Laborum et cillum ad ex et tempor ut
                        veniam proident Lorem ipsum. Cillum ad nisi dolore
                        reprehenderit consequat labore non consequat quis.
                        Exercitation aliqua eiusmod proident esse in esse cillum
                        aliqua reprehenderit veniam ex sint adipisicing esse.
                        Nisi non nulla reprehenderit minim aliqua qui sit esse
                        est.
                      </p>

                      <p>
                        Nulla excepteur enim ex qui. Aliqua eu cupidatat ullamco
                        laborum proident laborum id pariatur ex culpa deserunt
                        laborum laboris nisi.
                      </p>
                    </div>
                    <div className="text-4xl py-2 text-secondary-dark font-accent">
                      My Stack
                    </div>
                    <div className="py-2 flex w-full max-w-[650px] flex-wrap gap-2">
                      <BadgeTech name="HTML" logo="html" />
                      <BadgeTech name="CSS" logo="css" />
                      <BadgeTech name="JavaScript" logo="js" />
                      <BadgeTech name="React" logo="react" />
                      <BadgeTech name="NodeJS" logo="node" />
                      <BadgeTech name="ExpressJS" logo="express" />
                      <BadgeTech name="MongoDB" logo="mongodb" />
                    </div>
                  </div>
                  <div className="w-full hidden xl:flex justify-end">
                    <div className="text-3xl w-[33vw] max-w-[500px]">
                      <AnimatedMe />
                    </div>
                  </div>
                </div>
              </div>
            </Tween>
          </Scene>
        </Controller>
      </div>
    </>
  );
}

export default AboutMe;
