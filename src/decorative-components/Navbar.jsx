import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import LogoContainer from "./LogoContainer";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      id="navbar-container"
      //   here adjust padding to match that of other contents
      className="fixed flex justify-center w-screen h-16 z-50">
      <div className="w-full h-full bg-base bg-opacity-75 shadow-base-darker shadow py-10 sm:px-6 backdrop-blur-xl">
        <div className="w-full h-full flex justify-between items-center px-6">
          <Link to="/" className="text-primary-lighter">
            <LogoContainer />
          </Link>
          <div
            onClick={() => navigate(-1)}
            className="border-primary text-primary fill-primary h-5 text-sm flex justify-center items-center">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
