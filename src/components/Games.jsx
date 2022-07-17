import React, { useEffect, useState } from "react";
import { useGetGamesQuery } from "../services/nbaDataApi";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Spin } from "antd";

const Games = () => {
  const [page, setPage] = useState();
  const { data: games, isFetching, isLoading, error } = useGetGamesQuery(page);

  useEffect(() => {
    setPage(games?.meta.total_pages);
  }, []);

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
                  className="w-1/6 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  className="w-2/6 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Home Team
                </TableCell>
                <TableCell
                  className="w-1/6 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Score
                </TableCell>
                <TableCell
                  className="w-2/6 text-bold"
                  style={{
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  Visitor Team
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {games?.data
                .slice()
                .sort((a, b) => {
                  var dateA = new Date(a.date).getTime();
                  var dateB = new Date(b.date).getTime();

                  return dateB > dateA ? 1 : -1;
                })
                .map((game) => (
                  <TableRow
                    key={game.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="hover:bg-[#fdf6c7]"
                  >
                    <TableCell component="th" scope="row" className="w-1/6">
                      {game.date.split("T")[0]}
                    </TableCell>
                    <TableCell align="left" className="w-2/6">
                      {game.home_team.full_name}
                    </TableCell>
                    <TableCell align="center" className="w-1/6">
                      {game.home_team_score} : {game.visitor_team_score}
                    </TableCell>
                    <TableCell align="right" className="w-2/6">
                      {game.visitor_team.full_name}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="flex justify-center items-center gap-5 mb-8">
        {games.meta.current_page === 1 ? null : (
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
        {games.meta.current_page === games.meta.total_pages ? (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]"
          >
            {games.meta.current_page - 1}
          </button>
        ) : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#d13c1b] cursor-pointer shadow-md text-[#F9EBC8] font-bold"
          >
            {games.meta.current_page}
          </button>
        )}

        {games.meta.current_page === games.meta.total_pages ? null : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]  hover:bg-[#d13c1b] hover:text-[#F9EBC8]"
          >
            {games.meta.next_page}
          </button>
        )}
        <p>...</p>

        {games.meta.current_page === games.meta.total_pages ? (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#d13c1b] cursor-pointer shadow-md text-[#F9EBC8] font-bold"
          >
            {games.meta.total_pages}
          </button>
        ) : (
          <button
            onClick={(e) => setPage(e.target.innerText)}
            className="border-2 rounded px-2 py-1 bg-[#F9EBC8] cursor-pointer shadow-md text-[#d13c1b]   hover:bg-[#d13c1b] hover:text-[#F9EBC8]"
          >
            {games.meta.total_pages}
          </button>
        )}

        {games.meta.current_page === games.meta.total_pages ? null : (
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

export default Games;
