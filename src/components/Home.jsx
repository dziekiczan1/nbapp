import React, { useState } from "react";
import { useGetTeamsQuery } from "../services/nbaDataApi";
import { useGetNbaNewsQuery } from "../services/nbaNewsApi";

const Home = () => {
  const [category, setCategory] = useState("Atlanta Hawks");
  const { data: teams } = useGetTeamsQuery();
  const { data: nbaNews } = useGetNbaNewsQuery({
    category,
    count: 10,
  });

  const noImage = "https://piotr.rzadkowolski.dev/noimage.png";

  if (!nbaNews?.value) return "Loading...";

  console.log(nbaNews);

  return (
    <>
      <div className="py-4 px-8">
        <select
          placeholder="Choose category"
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 w-1/4 rounded shadow-md p-2"
        >
          <option value="Nba">Nba News</option>
          {teams?.data.map((team) => (
            <option value={team.full_name} className="hover:bg-sky-700">
              {team.full_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col flex-wrap shadow-md bg-[#FEFBE7] cursor-pointer gap-12 px-8 py-4 w-1/2 mt-4">
        {nbaNews.value.map((news, i) => (
          <ul key={i}>
            <li>
              <div className="flex flex-row">
                <img
                  src={news?.image?.thumbnail?.contentUrl || noImage}
                  alt={news.name}
                  style={{ width: "100px", height: "100px" }}
                  className="mr-2 shadow-xl rounded-lg"
                />
                <div className="flex flex-col">
                  <a href={news.url}>
                    <p className="font-bold">{news.name}</p>
                    <p>
                      {news.description.length > 200
                        ? `${news.description.substring(0, 200)}...`
                        : news.description}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Home;
