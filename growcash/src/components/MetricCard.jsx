import React from "react";

function MetricCard({ label, type, value, bannerImg }) {
  return (
    <div
      className={`bg-[#FFFFFF] text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
    >
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-[length:22vh_30vh] bg-center bg-end bg-no-repeat h-full w-full"
      ></div>
      <div className="flex flex-col gap-3 w-full bg-[#BEADFA] px-4 py-4 backdrop-blur-xl rounded-b-lg">
        <h1 className="text-[2rem]">
          {type === "revenue" && "$"}
          ${value | 0}{" "}
          {type === "stocks" ? "Units" : type === "sales" ? "Units" : ""}
        </h1>
        <p className="text-slate-700 font-bold">{label}</p>
      </div>
    </div>
  );
}

export default MetricCard;
