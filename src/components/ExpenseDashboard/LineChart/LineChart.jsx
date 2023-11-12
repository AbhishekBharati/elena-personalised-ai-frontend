import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expenses',
      },
    },
  };

const formatDate = (isoDateString) => {
  console.log(isoDateString);
  const date = new Date(isoDateString);
  console.log(date)
  return `${String(date.getDate())}`;
}

const LineChart = ({data}) => {
    const chartData = {
        labels : data.map(item => formatDate(item.date)),
        datasets : [{
            label : 'Expenses',
            data : data.map(item => item.amount),
            borderColor : 'rgb(53, 162, 235)',
            backgroundColor : 'rgba(53, 162, 235, 0.5)',
        }]
    }
  console.log(chartData);
    return (
        <>
            <Line style={{height : '100vh', width : '100vw'}} options={options} data={chartData} />
        </>
    )
}

export default LineChart;