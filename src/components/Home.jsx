import React, { useState } from "react";
import { useGetTeamsQuery } from "../services/nbaDataApi";
import { useGetNbaNewsQuery } from "../services/nbaNewsApi";
import nbalogo from "../assets/NBAlogo.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import { Carousel } from "antd";
import "./Slider.css";
const Home = () => {
  const [category, setCategory] = useState("Atlanta Hawks");
  const { data: teams } = useGetTeamsQuery();
  const { data: nbaNews } = useGetNbaNewsQuery({
    category,
    count: 10,
  });

  const noImage = "https://piotr.rzadkowolski.dev/noimage.png";

  const contentStyle = {
    textAlign: "center",
    background: "#FEFBE7",
    objectFit: "cover",
    overflow: "hidden",
  };

  if (!nbaNews?.value) return "Loading...";
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col items-center py-4 px-8">
            <p className="text-xl text-gray-300 mb-2">Choose your news...</p>
            <select
              placeholder="Choose category"
              onChange={(e) => setCategory(e.target.value)}
              className="border-2  w-full md:w-1/2 rounded shadow-md p-2"
            >
              <option value="Nba" className="bg-[#FEFBE7] text-lg">
                Nba News
              </option>
              {teams?.data.map((team) => (
                <option value={team.full_name} className="bg-[#FEFBE7] text-lg">
                  {team.full_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col flex-wrap shadow-md bg-[#FEFBE7] cursor-pointer gap-6 w-full mt-4">
            {nbaNews.value.map((news, i) => (
              <ul key={i}>
                <li>
                  <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start hover:bg-[#fdf6c7] p-4">
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
                          {news.description.length > 150
                            ? `${news.description.substring(0, 150)}...`
                            : news.description}
                        </p>
                      </a>
                    </div>
                  </div>

                  <hr className="mx-2" />
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="hidden md:block w-1/2 py-4 px-8">
          <img src={nbalogo} alt="Nba Logo" />
          <div>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>
                  <img src={slider1} alt="Slider" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src={slider2} alt="Slider" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src={slider3} alt="Slider" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src={slider4} alt="Slider" />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
