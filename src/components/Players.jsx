import React, {useState, useEffect} from 'react'
import { useGetPlayersQuery } from "../services/nbaDataApi";
import { Pagination } from 'antd';

const Players = () => {
  const [page, setPage] = useState(1);
  const { data: players, isFetching } = useGetPlayersQuery(page);

    if (isFetching) return "Loading...";
console.log(players.meta.current_page)

  return (
    <>
    <div>{players.data.map((player) => (
        <p key={player.id}>{player.first_name}</p>
    ))}</div>

<button onClick={() => setPage((prev) => prev - 1)} >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}

        >
         Next
        </button>

    </>
  )
}

// current_page: 1
// next_page: 2
// per_page: 25
// total_count: 3757
// total_pages: 151

export default Players