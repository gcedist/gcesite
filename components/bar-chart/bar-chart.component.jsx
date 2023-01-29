import React from 'react';
import Chart from 'react-apexcharts';

import './bar-chart.styles.css';

class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "bar-chart",
                    type: 'bar',
                    stacked: this.props.chartProps.stacked,
                    stackType: this.props.chartProps.stackType ? this.props.chartProps.stackType : '',
                },
                xaxis: {
                    categories: this.props.chartProps.categories,
                    position: 'bottom',
                    axisTicks: {
                        show: false,
                    }
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: !this.props.chartProps.stacked  // remove grid lines apenas para stacked charts
                        },
                    }
                },
                // title: {
                //     text: this.props.chartProps.title
                // },
                // subtitle: {
                //     text: 'Fonte: SINASC'
                // },
                colors: ["#094b80", "#fed266", "#6314af", "#86ec5a", "#860967", "#4be8f9", "#1c5f1e", "#b3d9fa", "#298cc0", "#e33ab9"],
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    },
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetX: 0,
                    offsetY: 0,
                },
                fill: {
                    opacity: 1,
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        columnWidth: '86%',
                        distributed: false,
                        horizontal: false,
                        dataLabels: {
                            position: 'center',
                        },
                    },
                },
                dataLabels: {
                    style: {
                        fontSize: '10px',
                        fontWeight: 'bold',
                          colors: ['#fff', '#000']
                    },
                    // background: {
                    //   enabled: true,
                    //   foreColor: '#fff',
                    //   borderRadius: 2,
                    //   padding: 4,
                    //   opacity: 0.9,
                    //   borderWidth: 1,
                    //   borderColor: '#fff'
                    // },
                },
                responsive: [{
                    breakpoint: 769,
                    options: {
                        // dataLabels: {
                        //     style: {
                        //         fontSize: '0px'
                        //     }
                        // },

                        // xaxis: {
                        //     labels: {
                        //         style: {
                        //             fontSize: '10px'
                        //         }
                        //     }
                        // }
                        plotOptions: {
                            bar: {
                                barHeight: this.props.chartProps.stackType ? '90%' : '100%',
                                horizontal: this.props.chartProps.stackType ? true : false,
                                columnWidth: this.props.chartProps.stackType ? '100%': '86%',
                            }
                        }
                    
                    },
                }
            ]
            },
            // series: props.chartProps.dataSeries
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.props.chartProps.series}
                type="bar"
                width="100%"
                height="410px"
                className="bar-chart"
            />
        );
    }
}


export default BarChart;