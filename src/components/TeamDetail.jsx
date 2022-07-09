import React from "react";
import { useGetTeamQuery } from "../services/nbaDataApi";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetTeamQuery(id);
  console.log(data);
  if (isFetching) return "Loading...";

  return (
    <>
      <p>{data.city}</p>
      <p>{data.full_name}</p>
    </>
  );
};

export default TeamDetail;
