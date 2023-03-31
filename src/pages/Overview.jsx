import React from "react";
import LineChart from "../components/LineChart";
const Overview = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-row">
          <div className="w-4/12 flex flex-col items-center">
            <h4>Start</h4>
            <div>
              <span>180.0</span>
              <span>lb</span>
            </div>
          </div>
          <div className="w-4/12 flex flex-col items-center">
            <h4>Current</h4>
            <div>
              <span>177.0</span>
              <span>lb</span>
            </div>
          </div>
          <div className="w-4/12 flex flex-col items-center">
            <h4>Target</h4>
            <div>
              <span>170.0</span>
              <span>lb</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 m-0.5">
          <div className="border-8 border-indigo-600"></div>
          <label>Weight</label>
          <div className="border-8 border-emerald-500"></div>
          <label>Average</label>
          <div className="border-8 border-red-500"></div>
          <label>Target</label>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <LineChart />
      </div>
      <div className="w-full flex flex-row mt-4 items-center">
        <div className="w-4/12 flex flex-col items-center">
          <h4>Change</h4>
          <div>
            <span>3.0</span>
            <span>lb</span>
          </div>
        </div>
        <div className="w-4/12 flex items-center justify-center">
          <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center text-white text-4xl font-extralight">
            <span>+</span>
          </div>
        </div>
        <div className="w-4/12 flex flex-col items-center">
          <h4>Remaining</h4>
          <div>
            <span>7.0</span>
            <span>lb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
