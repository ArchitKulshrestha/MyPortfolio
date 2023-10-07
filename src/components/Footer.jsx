/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";

import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="flex justify-center items-center gap-5">
            <a href="https://github.com/ArchitKulshrestha">
              <BsGithub className="text-2xl text-white hover:text-gray-200 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/archit-kulshrestha-1aa01a255/">
              <BsLinkedin className="text-2xl text-white hover:text-gray-200 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/archit0918/">
              <BsInstagram className="text-2xl text-white hover:text-gray-200 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
