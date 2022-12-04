import "./App.css";
import ScrollInfo from "./decorative-components/ScrollInfo";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProjects from "./pages/MyProjects";
import MyResume from "./pages/MyResume";
import Contact from "./frontpage-components/Contact";
import Project1 from "./pages/project-pages/Project1";
import Project2 from "./pages/project-pages/Project2";
import Project3 from "./pages/project-pages/Project3";
import Project4 from "./pages/project-pages/Project4";

function App() {
  const [cookies, setCookie] = useCookies(["language"]);
  const [visitorStatus, setVisitorStatus] = useState(true);

  const setVisitorCookie = () => {
    setCookie("language", "en", { path: "/" });
  };

  useEffect(() => {
    setVisitorCookie();
    if (cookies.language == "en") {
      setVisitorStatus(true);
    } else {
      setVisitorCookie();
      setVisitorStatus(false);
    }
  }, []);

  return (
    <>
      {visitorStatus ? null : <ScrollInfo />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="/projects">
            <Route index element={<MyProjects />} />
            <Route path="one" element={<Project1 />} />
            <Route path="two" element={<Project2 />} />
            <Route path="three" element={<Project3 />} />
            <Route path="four" element={<Project4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
