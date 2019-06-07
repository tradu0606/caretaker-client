import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';


class Chart extends Component {
    render() {
        var chart 
            if (this.props.type=="line"){
                chart = <Line data={this.props.data} />}
            else {
                chart = <Bar data={this.props.data} />
            }
        return (
            chart
        );
    }
}

export default Chart;