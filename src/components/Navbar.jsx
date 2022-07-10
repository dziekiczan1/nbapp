import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { FaBasketballBall } from "react-icons/fa";

const Navbar = () => {
  const divStyles =
    "flex flex-col md:flex-row md:justify-center items-center pb-2 text-[#F9EBC8] hover:text-[#d13c1b] transition fade-in-out";
  const iconStyles = "text-2xl md:text-4xl";
  const linkStyles =
    "font-bold text-sm md:text-lg uppercase pt-2 md:pt-0 md:ml-4 sm:content-none";

  return (
    <div className="flex flex-col justify-around cursor-pointer w-full">
      <div className={divStyles}>
        <AiOutlineHome className={iconStyles} />
        <p className={linkStyles}>
          <Link to="/">Home</Link>
        </p>
      </div>
      <div className={divStyles}>
        <FaBasketballBall className={iconStyles} />
        <p className={linkStyles}>
          <Link to="/teams">Teams</Link>
        </p>
      </div>
      <div className={divStyles}>
        <AiOutlineTeam className={iconStyles} />
        <p className={linkStyles}><Link to="/players">Players</Link></p>
      </div>
      <div className={divStyles}>
        <AiOutlineAreaChart className={iconStyles} />
        <p className={linkStyles}>Stats</p>
      </div>
      <div className={divStyles}>
        <AiOutlineContacts className={iconStyles} />
        <p className={linkStyles}>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
