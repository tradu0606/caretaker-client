import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
    render() {
        return (
            <Line data={this.props.data} />
        );
    }
}

export default Chart;