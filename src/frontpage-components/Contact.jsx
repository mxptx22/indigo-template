import React from "react";
import BadgeTech from "../decorative-components/BadgeTech";
import ProjectIcon from "../assets/aux-icons/ProjectIcon";
import SectionButton from "../decorative-components/SectionButton";
import { IconButton, WideButton } from "../decorative-components/ExtraButton";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <>
        <div className="min-h-[500px] h-min lg:max-h-[800px] px-4 py-8 sm:p-12 bg-gradient-to-bl from-secondary-dark via-secondary-darker to-primary-darker">
          <div className="flex gap-8 sm:gap-12 flex-col md:flex-row">
            <div className="w-full">
              <div className="text-6xl sm:text-7xl font-serif text-accent-lightest mb-12">
                Contact Me
              </div>
              <div className="sm:max-w-[400px] grid grid-cols-4 gap-3">
                <a href="mailto:hello@someemail.hehe" className="col-span-4">
                  <WideButton
                    text={"hello@someemail.hehe"}
                    icon={1}
                    classNames={
                      "text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                    }
                  />
                </a>
                <Link to="/projects" className="col-span-4">
                  <WideButton
                    text={"My Projects"}
                    icon={3}
                    classNames={
                      "text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                    }
                  />
                </Link>
                <Link to="/resume" className="col-span-4">
                  <WideButton
                    text={"My Resume"}
                    icon={2}
                    classNames={
                      "text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                    }
                  />
                </Link>

                <a href="">
                  <IconButton
                    icon={4}
                    classNames={
                      "text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                    }
                  />
                </a>
                <a href="">
                  <IconButton
                    icon={5}
                    classNames={
                      "text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                    }
                  />
                </a>
                <WideButton
                  text={
                    <div className="leading-5">
                      <div>London</div>
                      <div className="text-xs">United Kingdom</div>
                    </div>
                  }
                  icon={6}
                  classNames={
                    "btn-extra-icon-animation-override col-span-2 text-accent-lighter border-accent-dark hover:after:bg-accent-dark hover:text-accent-darkest-content"
                  }
                />
              </div>
            </div>
            <div className="w-full sm:w-2/3 lg:w-full max-w-[600px] text-accent-lighter">
              <form action="" method="POST">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  className="footer-input border-accent-dark rounded-none"></input>
                <input
                  required
                  name="email"
                  placeholder="Email"
                  className="footer-input border-accent-dark rounded-none"></input>
                <input
                  required
                  name="_subject"
                  placeholder="Subject"
                  className="footer-input border-accent-dark rounded-none"></input>
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  className="footer-input footer-input-textarea rounded-none border-accent-dark"
                />
                <button
                  type="submit"
                  className={`border-accent-dark text-accent fill-accent  fill-dark h-6 text-lg font-extralight w-fit`}>
                  <SectionButton text="Send" icon={4} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Contact;
