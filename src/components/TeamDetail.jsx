import React from "react";
import { useGetTeamQuery,useGetPlayersQuery } from "../services/nbaDataApi";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetTeamQuery(id);
  const { data: players} = useGetPlayersQuery();
    if (isFetching) return "Loading...";

    console.log(players)

  return (

    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.abbreviation}.svg`} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-center mb-4">{data.full_name}</p>
        <p><strong>Origin City:</strong> {data.city}</p>
        <p><strong>Conference:</strong> {data.conference}</p>
        <p><strong>Division:</strong> {data.division}</p>
      </div>
      {players.data.map((player) => {
        if (player.team.id === data.id ) return <p key={player.id}>{player.first_name}</p>
      })}
    </div>
  )};

export default TeamDetail;
