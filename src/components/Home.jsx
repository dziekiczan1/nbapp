import React, { useState } from "react";
import { useGetNbaNewsQuery } from "../services/nbaNewsApi";

const Home = () => {
  const [category, setCategory] = useState("Cryptocurrency");
  const { data: nbaNews } = useGetNbaNewsQuery({
    category,
    count: 20,
  });

  if (!nbaNews?.value) return "Loading...";
  console.log(nbaNews);
  return (
    <>
      <div>
        <select
          placeholder="News"
          onChange={(value) => setCategory(value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <option value="News">News</option>
        </select>
      </div>
    </>
  );
};

export default Home;
