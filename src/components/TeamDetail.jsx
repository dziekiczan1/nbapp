import React from "react";
import { useGetTeamQuery } from "../services/nbaDataApi";
import { useParams } from "react-router-dom";

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

  return (

    <div className="flex flex-col">
      <div className="flex justify-center items-center overflow-hidden">
        <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.abbreviation}.svg`} style={{height: "350px"}}/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-center mb-4">{data.full_name}</p>
        <p><strong>Origin City:</strong> {data.city}</p>
        <p><strong>Conference:</strong> {data.conference}</p>
        <p><strong>Division:</strong> {data.division}</p>
      </div>
    </div>
  )};

export default TeamDetail;
