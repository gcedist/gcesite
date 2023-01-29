import React from 'react';
import Chart from 'react-apexcharts';

import './histogram.styles.css';

class HistogramChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "bar-chart",
                    type: 'bar'
                },
                xaxis: {
                    max: this.props.chartProps.xmax ? this.props.chartProps.xmax : undefined,
                    min: this.props.chartProps.xmin ? this.props.chartProps.xmin : undefined,
                    categories: this.props.chartProps.categories,
                    type:'numeric',
                    position: 'bottom',
                    title: {
                        text: 'Distância (em Km)',
                    },
                    axisTicks: {
                        show: true,
                    },
                    labels: {
                        formatter: function (val) {
                            return (val / 1000).toFixed(1);
                        }
                    }
                },
                yaxis: {
                    max: this.props.chartProps.ymax ? this.props.chartProps.ymax : undefined,
                    min: this.props.chartProps.ymin ? this.props.chartProps.ymin : undefined
                    // title: {
                    //     text: 'Frequência'
                    // }
                },
                colors: this.props.chartProps.color ? this.props.chartProps.color : ["#094b80", "#ffd166", "#64e058", "#8a0458", "#9fd3aa", "#702cb4", "#378811", "#ec9fe7", "#1eefc9", "#b8451f"],
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    x: {
                        formatter: function (val) {
                            return 'Distância média percorrida: ' + val.toFixed(2) + 'm'
                        }
                    }
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
                        columnWidth: '98%',
                        distributed: false,
                        horizontal: false,
                        dataLabels: {
                            position: 'top',
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                    style: {
                        fontSize: '10px',
                        fontWeight: 'bold',
                          colors: ['#fff', '#000']
                    },
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


export default HistogramChart;