import iconHamburger from "./shared/icon-hamburger.svg";
import iconClose from "./shared/icon-close.svg";
import logo from "./shared/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState("menu");

  const handleMenu = () => {
    menu === "menu" ? setMenu("menu menuOpen") : setMenu("menu");
  };

  return (
    <div className="absolute top-6 mb-0 w-screen lg:overflow-hidden ">
      <div className="relative z-50 w-full max-lg:px-10 ">
        <div className=" flex w-full items-center max-md:justify-between">
          <Link to="/" className="lg:pl-20 xl:pl-32 2xl:pl-48">
            <img src={logo} alt="" className="size-10 md:size-12" />
          </Link>
          <div className="md:relative md:inset-x-1/4 lg:inset-x-2/4 2xl:inset-x-3/4">
            <img
              src={menu === "menu" ? iconHamburger : iconClose}
              alt=""
              className="relative z-50 h-5 w-6 cursor-pointer md:hidden"
              onClick={handleMenu}
            />
            <div
              className={`${
                menu === "menu"
                  ? "z-50 max-md:hidden text-white backdrop-blur-[81.51px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(81.51px)_brightness(100%)] max-md:absolute max-md:-right-10 max-md:translate-x-full lg:-translate-x-32 xl:-translate-x-56 2xl:-translate-x-[50%]"
                  : "text-white max-md:absolute max-md:-right-10 max-md:-translate-x-10 lg:-translate-x-[13.2%] 2xl:-translate-x-[49%] absolute -top-10 z-10 block w-52 -translate-x-[9.62px] bg-[#ffffff0a] backdrop-blur-[40.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40.55px)_brightness(100%)] max-md:h-screen max-md:overflow-hidden"
              } max-xl:fixed md:top-0 max-md:mt-4 md:bg-white/[.04] xl:relative `}
            >
              <nav className="text-[16px] max-md:-right-0 md:text-[14px] xl:text-[16px] max-md:absolute max-md:top-24 max-md:ml-10 md:px-12 md:py-8 lg:mx-7 lg:-ml-[0px] xl:-ml-[20px] xl:px-14 2xl:mr-80 2xl:px-20">
                <ul className="[&_a]:max-md:mr-8 max-md:justify-between md:flex md:flex-row md:space-x-12 xl:space-x-16 [&_li]:cursor-pointer [&_li]:justify-start [&_li]:max-md:my-10 [&_li]:max-md:flex [&_li]:md:ml-4 [&_li]:md:mr-8 [&_li]:md:flex">
                  <li>
                    <b className="md:max-xl:hidden">00</b>
                    <NavLink to="/" className="font-barlowCond tracking-widest">
                      {" "}
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <b className="md:max-xl:hidden">01</b>
                    <NavLink
                      to="/destination"
                      className="font-barlowCond tracking-widest"
                    >
                      {" "}
                      DESTINATION
                    </NavLink>
                  </li>
                  <li>
                    <b className="md:max-xl:hidden">02</b>
                    <NavLink
                      to="/crew"
                      className="font-barlowCond tracking-widest"
                    >
                      {" "}
                      CREW
                    </NavLink>
                  </li>
                  <li>
                    <b className="md:max-xl:hidden ">03</b>
                    <NavLink
                      to="/technology"
                      className="font-barlowCond tracking-widest"
                    >
                      {" "}
                      TECHNOLOGY
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
