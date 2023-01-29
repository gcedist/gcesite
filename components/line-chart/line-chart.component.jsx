import React from 'react';
import Chart from 'react-apexcharts';

import './line-chart.styles.css';

class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "line-chart",
                    redrawOnParentResize: true
                },
                xaxis: {
                    categories: this.props.chartProps.categories,
                },
                yaxis: {
                    tickAmount: 5,
                    labels: {
                        formatter: function (val) {
                            return val ? val.toFixed(4) : null;
                        }
                    }
                },
                colors: ["#094b80", "#fed266", "#6314af", "#86ec5a", "#860967", "#4be8f9", "#1c5f1e", "#b3d9fa", "#298cc0", "#e33ab9"],
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val ? val.toFixed(4) : null 
                        }
                    },
                    x: {
                        formatter: function (val) {
                            return `Idade: ${val} meses`
                        }
                    }
                },
            },
        };
    }

    render() {
        // console.log(this.props.chartProps.series)
        return (
            <Chart
                options={this.state.options}
                series={this.props.chartProps.series}
                type="line"
                width="100%"
                height="410px"
                className="line-chart"
            />
        );
    }
}


export default LineChart;