import React, { Component } from 'react';
import Chart from '../Chart'
import axios from 'axios';

class Metrics extends Component {
    constructor() {
        super();
        this.state = {
            weightData: {},
            sugarData: {},
            pressureData: {}
        }
    }
    componentDidMount() {
        axios
            .get(`https://care-taker-app.herokuapp.com/weight/${this.props.userID}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((json) => {
                let weightDataTemp = json.data.map((data) => data.weight);
                let dateTemp = json.data.map((data) => data.date.toString().replace('T', ' ').slice(0, 16));
                this.setState({
                    weightData: {
                        labels: dateTemp,
                        datasets: [
                            {
                                fill: false,
                                backgroundColor: 'rgb(222, 126, 105)',
                                borderColor: '#399d96c2',
                                label: 'weight',
                                data: weightDataTemp
                            }
                        ],
                        options: {
                            title: {
                                display: true,
                                text: 'Weight'
                            }
                        }
                    }
                })
            })
        axios.get(`https://care-taker-app.herokuapp.com/sugarlevel/${this.props.userID}`).then((userSugarLevels) => {
            let labels = userSugarLevels.data.map((userSugarLevels) =>
                userSugarLevels.date.toString().replace('T', ' ').slice(0, 16)
            );
            let sugarLevelBeforeMeal = userSugarLevels.data.map(
                (userSugarLevels) => userSugarLevels.sugarLevelBeforeMeal
            );
            let sugarLevelAfterMeal = userSugarLevels.data.map(
                (userSugarLevels) => userSugarLevels.sugarLevelAfterMeal
            );
            let id = userSugarLevels.data.map((userSugarLevels) => userSugarLevels._id);
            this.setState({
                sugarData: {
                    id: id,
                    labels: labels,
                    datasets: [
                        {
                            fill: false,
                            backgroundColor: '#E5593A',
                            borderColor: 'gray',
                            label: 'blood sugar before meal',
                            data: sugarLevelBeforeMeal
                        },
                        {
                            fill: false,
                            backgroundColor: '#399d96c2',
                            borderColor: 'gray',
                            label: 'blood sugar after meal',
                            data: sugarLevelAfterMeal
                        }
                    ],
                    options: {
                        title: {
                            display: true,
                            text: 'Blood Sugar'
                        }
                    }
                }
            })
        }
        )

        axios
            .get(`https://care-taker-app.herokuapp.com/bloodpressure/${this.props.userID}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((json) => {
                let labels = json.data.map((data) => data.date.toString().replace('T', ' ').slice(0, 16));
                let dataSystolic = json.data.map((data) => data.systolic);
                let dataDiastolic = json.data.map((data) => data.diastolic);
                let id = json.data.map((data) => data._id);
                console.log(labels);
                this.setState({
                    id: id,
                    pressureData: {
                        labels: labels,
                        datasets: [
                            {
                                fill: false,
                                backgroundColor: 'rgb(222, 126, 105)',
                                borderColor: '#E5593A',
                                label: 'systolic',
                                data: dataSystolic
                            },
                            {
                                fill: false,
                                backgroundColor: '#68aca8c2',
                                borderColor: '#399d96c2',
                                label: 'diastolic',
                                data: dataDiastolic
                            }
                        ],
                        options: {
                            title: {
                                display: true,
                                text: 'Blood Pressure'
                            }
                        }
                    }
                })
            }
            )
    }

    render() {
        return (
            <div>
                <Chart type="line"  data={this.state.weightData} />
                <Chart type="bar"  data={this.state.sugarData} />
                <Chart type="line"  data={this.state.pressureData} />
            </div>
        );
    }
}

export default Metrics;