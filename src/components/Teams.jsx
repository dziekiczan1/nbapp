import React from "react";
import { useGetTeamsQuery } from "../services/nbaDataApi";

import TeamCard from "./TeamCard";

const Teams = () => {
  const { data, isFetching } = useGetTeamsQuery();
  const globalData = data?.data;

  if (isFetching) return "Loading...";

  return (
    <div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">Atlantic</h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">Central</h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">
          Southeast
        </h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">
          Northwest
        </h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">Pacific</h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">
          Southwest
        </h1>
        <hr
          style={{
            marginBottom: "2rem",
            width: "80%",
            height: "1px",
            border: "0",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          }}
        ></hr>
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
    </div>
  );
};

export default Teams;
