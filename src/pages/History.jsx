import React from "react";

const History = () => {
  return (
    <div className="w-full h-full">
      <table className="flex flex-col justify-center">
        <thead>
          <tr className="flex flex-row items-center justify-around border border-1">
            <th>Date</th>
            <th>Current Weight</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-row items-center justify-around border border-1">
            <td>6/31/23</td>
            <td>178 lb</td>
            <td>-0.7 lb</td>
          </tr>
          <tr className="flex flex-row items-center justify-around border border-1">
            <td>6/31/23</td>
            <td>178 lb</td>
            <td>-0.7 lb</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
