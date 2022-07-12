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
              width: "320px",
              height: "340px",
              borderRadius: "0.375rem",
              objectFit: "cover",
            }}
          />
          <div
            className="bg-[#F9EBC8] absolute bottom-0 w-full"
            style={{ height: "70px" }}
          >
            <h1 className="relative p-2 bottom-0 text-4xl text-[#d13c1b] align-left underline decoration-dotted underline-offset-8">
              {name}
            </h1>
          </div>
        </div>
        <div
          className="shadow-xl flip-card-back"
          style={{ width: "320px", height: "350px" }}
        >
          <h1 className="text-4xl text-[#d13c1b] ml-2 ">{data}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
