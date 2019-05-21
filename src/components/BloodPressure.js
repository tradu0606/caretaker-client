import React, { Component } from 'react';
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'


class BloodPressure extends Component {
    constructor() {
        super()
        this.state = {


            labels: [],
            datasets: [{
                fill: false,
                backgroundColor: "blue",
                borderColor: "blue",
                label: "systolic",
                data: []
            },
            {
                fill: false,
                backgroundColor: "red",
                borderColor: "red",
                label: "diastolic",
                data: []
            }],
            options: {
                title: {
                    display: true,
                    text: "Blood Pressure"
                }
                
            }

        }
    }
    newChart = () => {

    }
    componentDidMount() {
        axios.get(`http://localhost:3001/bloodpressure/5ce2ef62116c10b9d385c064`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let labels = json.data.map(data => data.date)
            let dataSystolic = json.data.map(data => data.systolic)
            let dataDiastolic = json.data.map(data => data.diastolic)
            console.log(labels)
            this.setState({

                labels: labels,
                datasets: [{
                    label: "systolic",
                    data: dataSystolic
                },
                {
                    label: "diastolic",
                    data: dataDiastolic
                }]

            })
            console.log(json)
        })
    }
    render() {
        return (
            <div>
                <h1>Blood Pressure</h1>
                <input type="button" value="Blood Pressure Chart" onClick={this.newChart} />
                <div className="chartHolder"><Line data={this.state} /></div>
                
            </div>
        );
    }
}

export default BloodPressure;