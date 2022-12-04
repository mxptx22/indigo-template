import "../App.css";
import Welcome from "../frontpage-components/Welcome";
import MyProjects from "../frontpage-components/MyProjects";
import Technologies from "../frontpage-components/Technologies";
import AboutMe from "../frontpage-components/AboutMe";
import Contact from "../frontpage-components/Contact";
import { useRef } from "react";

function Main() {
  let scrollRef = useRef(null);

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-secondary-darkest">
          <Welcome clickables={scrollRef} />
        </div>
        <div className="bg-secondary-darkest">
          <MyProjects />
        </div>
        <div className="bg-gray-900">
          <Technologies />
        </div>
        <div className="bg-base sticky pt-20">
          <AboutMe />
          <div ref={scrollRef}></div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Main;
