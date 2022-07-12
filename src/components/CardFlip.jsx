import React from "react";
import "./cardflip.css";

const CardFlip = ({ data, name }) => {
  return (
    <div className="shadow-xl flip-card">
      <div className="shadow-xl flip-card-inner">
        <div className="shadow-xl flip-card-front">
          <img
            src={`https://piotr.rzadkowolski.dev/projects/nbapp/assets/${data}.jpg`}
            alt={data}
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "0.375rem",
            }}
          />
          <h1 className="text-4xl text-white relative bottom-1/4 align-left ml-2 underline decoration-dotted underline-offset-8">
            {name}
          </h1>
        </div>
        <div
          className="shadow-xl flip-card-back"
          style={{ width: "300px", height: "300px" }}
        >
          <h1 className="text-4xl text-[#d13c1b] ml-2 ">{data}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
