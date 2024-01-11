import { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/shared/desktop/logo-black.svg";
import hamburger from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <nav className="max-w-6xl mx-auto flex items-center p-4 justify-between uppercase">
      <Link to="/">
        <img src={logoDark} alt="" />
      </Link>
      <div className="hidden md:flex items-center gap-4 font-bold text-xs">
        <Link to="/stories" className="hover:opacity-50">
          Stories
        </Link>
        <Link to="/features" className="hover:opacity-50">
          Features
        </Link>
        <Link to="/pricing" className="hover:opacity-50">
          Pricing
        </Link>
      </div>
      <div className="hidden md:block">
        <Link to="/">
          <button className="uppercase bg-black hover:bg-[#979797]/20 hover:text-black text-white h-10 w-40 font-bold text-xs">
            Get an invite
          </button>
        </Link>
      </div>

      <nav
        className={
          nav
            ? "md:hidden z-10 flex flex-col gap-8 absolute bg-white p-4 w-full top-[3.2rem] left-0 transition-all ease-in-out duration-700"
            : "md:hidden z-10 flex flex-col gap-8 absolute bg-white p-4 w-full top-[-100%] left-0 transition-all ease-in-out duration-700"
        }
      >
        <Link to="/stories" className="hover:opacity-50">
          Stories
        </Link>
        <Link to="/features" className="hover:opacity-50">
          Features
        </Link>
        <Link to="/pricing" className="hover:opacity-50">
          Pricing
        </Link>
        <div className="w-full h-[1px] bg-[#979797]"></div>
        <div>
          <Link to="/">
            <button className="uppercase bg-black hover:bg-[#979797]/20 w-full hover:text-black text-white h-12 font-bold text-xs">
              Get an invite
            </button>
          </Link>
        </div>
      </nav>

      <button className="md:hidden" onClick={handleNav}>
        {nav ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
      </button>
    </nav>
  );
}
