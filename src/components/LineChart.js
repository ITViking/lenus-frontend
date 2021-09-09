import React from "react";
import Chart from 'react-apexcharts'


export default class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Weight development',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
  }

  render() {
    function getSeries(dataEntries) {
      if(dataEntries.length === 0) return [];

      return [{
        name: "Weight",
        data: dataEntries.map(entry => { 
          return {
            x: entry.createdAt,
            y: entry.weight
          }
        })
      }]
    };

    return (
      <div id="chart">
        <Chart options={this.state.options} series={getSeries(this.props.dataEntries)} type="line" height={350} />
      </div>
    );
  }
}
