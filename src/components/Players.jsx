import React, { useState, useEffect } from "react";
import {
  useGetPlayersQuery,
  useGetPlayersNameQuery,
} from "../services/nbaDataApi";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Players = () => {
  const [page, setPage] = useState("");
  const [name, setName] = useState("");
  const { data: players, isFetching } = useGetPlayersQuery(page);
  // const { data } = useGetPlayersNameQuery(name);
  console.log(players);
  if (isFetching) return "Loading...";
  return (
    <>
      <div>
        <input placeholder="Search" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        {players.data
          .filter((val) => {
            if (name === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(name.toLowerCase())
            ) {
              return val;
            }
          })
          .map((player) => (
            <p key={player.id}>
              {player.first_name} {player.last_name}
            </p>
          ))}
      </div>

      <div className="flex justify-center items-center gap-5">
        {players.meta.current_page === 1 ? null : (
          <>
            <button
              onClick={() => setPage((prev) => prev + -1)}
              className="border-2 rounded px-2 py-1 cursor-pointer shadow-md text-[#d13c1b] bg-[#F9EBC8] hover:bg-[#d13c1b] hover:text-[#F9EBC8] font-bold text-xl"
            >
              <MdOutlineNavigateBefore />
            </button>
            <button
              onClick={() => setPage(1)}
              className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]   hover:bg-[#d13c1b] hover:text-[#F9EBC8]"
            >
              1{" "}
            </button>
          </>
        )}
        {players.meta.current_page === players.meta.total_pages ? (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]"
          >
            {players.meta.current_page - 1}
          </button>
        ) : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#d13c1b] cursor-pointer shadow-md text-[#F9EBC8] font-bold"
          >
            {players.meta.current_page}
          </button>
        )}

        {players.meta.current_page === players.meta.total_pages ? null : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]  hover:bg-[#d13c1b] hover:text-[#F9EBC8]"
          >
            {players.meta.next_page}
          </button>
        )}
        <p>...</p>

        {players.meta.current_page === players.meta.total_pages ? (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#d13c1b] cursor-pointer shadow-md text-[#F9EBC8] font-bold"
          >
            {players.meta.total_pages}
          </button>
        ) : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]   hover:bg-[#d13c1b] hover:text-[#F9EBC8]"
          >
            {players.meta.total_pages}
          </button>
        )}

        {players.meta.current_page === players.meta.total_pages ? null : (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="border-2 rounded px-2 py-1 cursor-pointer shadow-md text-[#d13c1b] bg-[#F9EBC8] hover:bg-[#d13c1b] hover:text-[#F9EBC8] font-bold text-xl"
          >
            <MdOutlineNavigateNext />
          </button>
        )}
      </div>
    </>
  );
};

export default Players;
