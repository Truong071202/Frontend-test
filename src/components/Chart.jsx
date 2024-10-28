import React from "react";

const LineChart = () => {
  // Data for the chart (increasing, with more points)
  const data = [0, 2, 5, 10, 15, 20, 28, 40]; // More points added
  const maxValue = Math.max(...data);
  const height = 220; // Chart height
  const width = 460; // Chart width

  // Calculate points for the polyline
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width; // Calculate x value as a percentage
      const y = height - (value / maxValue) * height; // Calculate y value as a percentage
      return `${x},${y}`; // Format points for the line
    })
    .join(" "); // Join points into a string

  return (
    <div className="relative">
      {/* Container for the dashed lines overlay */}
      <div className="absolute inset-0 mb-1">
        <div
          style={{
            bottom: "0%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "16.66%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "33.33%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "50%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "66.66%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "83.33%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
        <div
          style={{
            bottom: "100%",
            borderBottom: "0.36px dashed rgb(72 86 90 / 50%)",
          }}
          className="absolute w-full"
        />
      </div>

      {/* SVG for the chart */}
      <svg height={height} className="top-0 left-0 w-100% md:w-[460px]">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="34.54%" stopColor="#264F95" />
            <stop offset="91.38%" stopColor="rgba(11, 14, 24, 0)" />
          </linearGradient>
        </defs>
        <polygon
          points={`${points} ${width},${height} 0,${height}`}
          fill="url(#gradient)"
        />
        <polyline
          points={points}
          fill="none"
          stroke="#264F95"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute custom-popup p-2 text-xs md:text-sm top-112 right-32 z-2 ">
        <p>F0 (Rebate): 5% </p>
        <p>F1 (Commission): 35%</p>
        <p>F2 (Commission): 10%</p>
      </div>

      <div
        style={{
          border: "1px solid rgba(78, 174, 253, 1)",
        }}
        className="w-3 h-3 bg-white  rounded-full absolute top-[92px] right-[104px] z-2 hidden md:block"
      ></div>
    </div>
  );
};

export default LineChart;
