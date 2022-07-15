import React from "react";
import { useGetTeamQuery } from "../services/nbaDataApi";
import { useParams } from "react-router-dom";
import { getMainColor, getSecondaryColor } from "nba-color";

import CardFlip from "./CardFlip";

// style={{
//   backgroundImage: `url(https://cdn.nba.net/assets/logos/teams/secondary/web/${data.abbreviation}.svg)`;
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat"
// }}'

const TeamDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetTeamQuery(id);
  if (isFetching) return "Loading...";
  const colorPrimary = getMainColor(data.abbreviation);
  const colorSecondary = getSecondaryColor(data.abbreviation);

  return (
    <div className="mt-4 py-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold m-8 mb-4 text-[#d13c1b]">
        {data.full_name}
      </h1>
      <hr
        style={{
          marginBottom: "2rem",
          width: "80%",
          height: "5px",
          border: "0",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${colorSecondary.hex},${colorPrimary.hex}, ${colorSecondary.hex}, rgba(0, 0, 0, 0))`,
        }}
      ></hr>
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.abbreviation}.svg`}
          style={{ height: "350px" }}
          alt={data.full_name}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-20">
        <CardFlip data={data.city} name="Origin City" />
        <CardFlip data={data.conference} name="Conference" />
        <CardFlip data={data.division} name="Division" />
      </div>
    </div>
  );
};

export default TeamDetail;
