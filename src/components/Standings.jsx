import React, { useState } from "react";
import { useGetStandingsQuery } from "../services/nbaStandings";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Standings = () => {
  const { data: standings } = useGetStandingsQuery();
  const [conference, setConference] = useState("east");

  const conferenceStandings = standings?.league.standard.conference;

  return (
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
          <TableHead
            className="bg-[#d13c1b] py-4 text-white"
            style={{
              fontWeight: "700",
              display: "flex",
              flexDirection: "flex-row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <select
              placeholder="Eastern Conference"
              name="Conferences"
              style={{ backgroundColor: "#d13c1b" }}
              onChange={(e) => setConference(e.target.value)}
            >
              <option value="east">Eastern Conference</option>
              <option value="west">Western Conference</option>
            </select>
          </TableHead>
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
                  textAlign: "center",
                }}
              >
                #
              </TableCell>
              <TableCell
                className="w-3/6 text-bold"
                style={{
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                Name
              </TableCell>
              <TableCell
                className="w-1/6 text-bold"
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Win
              </TableCell>
              <TableCell
                className="w-1/6 text-bold"
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Loss
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conference === "east"
              ? conferenceStandings?.east.map((team) => (
                  <TableRow
                    key={team.teamId}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="hover:bg-[#fdf6c7]"
                  >
                    <TableCell align="center" className="w-1/6">
                      {team.confRank}
                    </TableCell>
                    <TableCell
                      className="w-3/6"
                      style={{
                        display: "flex",
                        flexDirection: "flex-row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0",
                      }}
                    >
                      <img
                        src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.teamSitesOnly.teamTricode}.svg`}
                        style={{ height: "20px", marginRight: "0.2rem" }}
                        alt={team.teamSitesOnly.teamName}
                      />
                      {team.teamSitesOnly.teamName}{" "}
                      {team.teamSitesOnly.teamNickname}
                    </TableCell>
                    <TableCell align="center" className="w-1/6">
                      {team.confWin}
                    </TableCell>
                    <TableCell align="center" className="w-1/6">
                      {team.confLoss}
                    </TableCell>
                  </TableRow>
                ))
              : conferenceStandings?.west.map((team) => (
                  <TableRow
                    key={team.teamId}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="hover:bg-[#fdf6c7]"
                  >
                    <TableCell align="center" className="w-1/6">
                      {team.confRank}
                    </TableCell>
                    <TableCell
                      className="w-3/6"
                      style={{
                        display: "flex",
                        flexDirection: "flex-row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0",
                      }}
                    >
                      <img
                        src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.teamSitesOnly.teamTricode}.svg`}
                        style={{ height: "20px", marginRight: "0.2rem" }}
                        alt={team.teamSitesOnly.teamName}
                      />
                      {team.teamSitesOnly.teamName}{" "}
                      {team.teamSitesOnly.teamNickname}
                    </TableCell>
                    <TableCell align="center" className="w-1/6">
                      {team.confWin}
                    </TableCell>
                    <TableCell align="center" className="w-1/6">
                      {team.confLoss}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Standings;
