import React from "react";

const Statistics = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col p-2">
        <h1 className="text-2xl px-2">Trends</h1>
        <div className="w-full border border-black"></div>
        <div className="flex flex-row justify-between px-2">
          <div>Change last 7 days</div>
          <div>
            <span>1.9</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2">
          <div>Change last 30 days</div>
          <div>
            <span>1.9</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-2">
        <h1 className="text-2xl px-2">BMI</h1>
        <div className="w-full border border-black"></div>
        <div className="h-40 w-full flex flex-col items-center justify-center">
          <div className="w-2/6 h-1/2 border bg-orange-600 rounded"></div>
          <div className="flex flex-row items-center gap-2 m-0.5 overflow-scroll w-full justify-center">
            <div className="border-8 border-orange-600"></div>
            <label>UnderWeight</label>
            <div className="border-8 border-emerald-500"></div>
            <label>Normal</label>
            <div className="border-8 border-red-500"></div>
            <label>OverWeight</label>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2">
          <div>Category</div>
          <div>
            <span className="px-1">Overweight</span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2">
          <div>Normal Weight</div>
          <div>
            <span>117.7</span>
            <span>-</span>
            <span>159.0</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2">
          <div>Difference</div>
          <div>
            <span>+</span>
            <span>18.0</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-2">
        <h1 className="text-2xl px-2">Progress</h1>
        <div className="w-full border border-black"></div>
        <div className="flex flex-row justify-between px-2">
          <div>Average change per week</div>
          <div>
            <span>1.9</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2">
          <div>Average change per month</div>
          <div>
            <span>1.9</span>
            <span className="px-1">lbs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
