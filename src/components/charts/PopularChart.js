import React from "react";
import ReactApexChart from "react-apexcharts";

class PopularChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='polarArea'
        width='300px'
        height='300px'
      />
    );
  }
}

export default PopularChart;
