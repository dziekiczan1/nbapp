import React from "react";
import { useGetTeamsQuery } from "../services/nbaDataApi";

import TeamCard from "./TeamCard";

const Teams = () => {
  const { data, isFetching } = useGetTeamsQuery();
  const globalData = data?.data;

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Atlantic</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Atlantic")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Central</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Central")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Southeast</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Southeast")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Northwest</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Northwest")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Pacific</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Pacific")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Southwest</h1>
        <div className="flex flex-wrap justify-center items-center">
          {globalData.map((team) => {
            if (team.division === "Southwest")
              return (
                <TeamCard
                  key={team.id}
                  nameTeam={team.full_name}
                  abb={team.abbreviation}
                  city={team.city}
                  conference={team.conference}
                  id={team.id}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Teams;
