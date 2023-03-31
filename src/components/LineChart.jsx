import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Colors,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Colors);
const LineChart = () => {
  const current = new Date();
  // eslint-disable-next-line
  const [labelDate, setLabelDate] = useState(current.getMonth() + 1);
  const data = {
    labels: [
      `${labelDate}/05`,
      `${labelDate}/10`,
      `${labelDate}/15`,
      `${labelDate}/20`,
      `${labelDate}/25`,
      `${labelDate}/30`,
    ],
    datasets: [
      {
        data: [172, 174, 180],
      },
    ],
  };
  const options = {
    colors: {
      enabled: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 2,
        },
      },
    },
  };
  return (
    <div className="w-full h-auto flex justify-center p-4">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;
