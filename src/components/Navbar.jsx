import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import resume from "../../public/resume2.pdf";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 backdrop-blur-sm bg-primary/70`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Archit&nbsp;
            <span className="sm:block hidden">|&nbsp;Kulshrestha</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href={resume} download="resume" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </li>
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-5 h-5 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {/* mobile menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
            <ul className="list-none flex justify-end items-start  flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setToggle(!toggle)}>
                <a
                  href={resume}
                  download="resume"
                  target="_blank"
                  rel="noreferrer">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
