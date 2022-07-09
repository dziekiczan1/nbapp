import React from "react";
import { useGetTeamQuery } from "../services/nbaDataApi";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetTeamQuery(id);
  console.log(data);
  if (isFetching) return "Loading...";

  return (

    <div className="flex flex-col justify-center items-center">
      <div className="">
        <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.abbreviation}.svg`} />
      </div>
      <div className="">
        <p className="text-2xl">{data.full_name}</p>
        <p>{data.city}</p>
        <p>{data.conference}</p>
        <p>{data.division}</p>
      </div>
    </div>
  )};

export default TeamDetail;
