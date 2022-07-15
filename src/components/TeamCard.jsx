import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ nameTeam, abb, id }) => {
  return (
    <Link to={`${id}`}>
      <div className="flex flex-col flex-wrap m-4 shadow-md py-2 px-2 bg-[#FEFBE7] cursor-pointer">
        <div className="flex justify-center items-center w-full">
          <div className="bg-[#F9EBC8] rounded-full w-full shadow-md flex justify-center items-center overflow-visible">
            <img
              src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${abb}.svg`}
              className="transition ease-in-out hover:scale-150 duration-300"
              alt={nameTeam}
            />
          </div>
        </div>
        <div className="pt-4 hidden md:block">
          <span className="font-bold text-xs text-[#d13c1b] flex justify-center items-center">
            {nameTeam}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
