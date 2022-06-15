import React from "react";
import ReactApexChart from "react-apexcharts";

const popularChart_2 = props => {

//console.log(props);
  return (
    <ReactApexChart
        options={props.chartOptions}
        series={props.chartData}
        type='polarArea'
        width='300px'
        height='300px'
      />
  )
}

export default popularChart_2;
