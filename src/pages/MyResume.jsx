import React from "react";
import Navbar from "../decorative-components/Navbar";
import ResumePDF from "../assets/documents/resume.pdf";

function MyResume() {
  return (
    <>
      <Navbar />
      {/* padding to offset navbar */}
      <div className="h-screen pt-20">
        <iframe
          src={ResumePDF}
          type="application/pdf"
          className="h-full w-full"></iframe>
      </div>
    </>
  );
}

export default MyResume;
