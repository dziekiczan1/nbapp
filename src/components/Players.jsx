import React, { useState, useEffect } from "react";
import { useGetPlayersQuery } from "../services/nbaDataApi";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Spin } from "antd";

const Players = () => {
  const [page, setPage] = useState("");
  const [input, setInput] = useState("");
  const {
    data: players,
    isFetching,
    isLoading,
    error,
  } = useGetPlayersQuery({ page, input });
  const [playersList, setPlayersList] = useState();

  useEffect(() => {
    setPlayersList(players?.data);
  }, [players, input, page]);

  if (isLoading || isFetching)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Spin size="large" />
        <p className="text-4xl">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Spin size="large" />
        <p className="text-4xl">There is an error. Sorry.</p>
      </div>
    );
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          value={input}
          placeholder="Search player..."
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          className="w-3/4 mt-4 mb-4 p-4 border-2 focus:outline-none focus:border-violet-400 rounded shadow-md"
        />
      </div>
      <div>
        <TableContainer
          component={Paper}
          style={{
            width: "100%",
            margin: "2rem 0rem",
          }}
          className="shadow-md"
        >
          <Table
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            aria-label="customized table"
          >
            <TableHead className="bg-[#fdf6c7]">
              <TableRow
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TableCell
                  className="w-1/4 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  className="w-1/4 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  Position
                </TableCell>
                <TableCell
                  className="w-2/4 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  Team
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playersList?.map((player) => (
                <TableRow
                  key={player.id}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className="hover:bg-[#fdf6c7]"
                >
                  <TableCell component="th" scope="row" className="w-1/4">
                    {player.first_name} {player.last_name}
                  </TableCell>
                  <TableCell align="right" className="w-1/4">
                    {player.position}
                  </TableCell>
                  <TableCell align="right" className="w-2/4">
                    {player.team.full_name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="flex justify-center items-center gap-5 mb-8">
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
        {players.meta.current_page !== 2 && players.meta.current_page !== 1 ? (
          <>
            <button
              onClick={(e) => setPage(e.target.innerText)}
              className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]"
            >
              {players.meta.current_page - 1}
            </button>

            <button
              onClick={(e) => setPage(e.target.innerText)}
              className="border-2 rounded px-2 py-1 bg-[#d13c1b] cursor-pointer shadow-md text-[#F9EBC8] font-bold"
            >
              {players.meta.current_page}
            </button>
          </>
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
