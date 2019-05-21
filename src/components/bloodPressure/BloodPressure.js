import React, { Component } from 'react';
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'


class BloodPressure extends Component {
    constructor() {
        super()
        this.state = {
            chartOrHistory: null,
            swichButton: "history",
            userID: "5ce2ef62116c10b9d385c064",
            data: {
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
    }
    newChart = (e) => {
        e.preventDefault()
        var tempReturn = []
        if (this.state.swichButton === "chart"){
            this.setState({
                chartOrHistory: <Line data={this.state.data} />,
                swichButton: "history"
            })

        } else {
            var templength = this.state.data.labels.length
            function buidHistory(date, systolic, diastolic){
                return (<div>
                <p>{date}</p>
                <p>{systolic}</p>
                <p>{diastolic}</p>
                </div>)
            }
            for(let i=0; i < templength; i++){
                tempReturn.push(buidHistory(this.state.data.labels[i], this.state.data.datasets[0].data[i], this.state.data.datasets[1].data[i]))
            }
            this.setState({
                chartOrHistory: tempReturn,
                swichButton: "chart"
            })
        }
    }

    AddBloodPressure = (e) => {
        e.preventDefault()
        var systolic = document.querySelector('#systolic').value
        var diastolic = document.querySelector('#diastolic').value
        var date = new Date().toLocaleString()
        console.log(date)
        axios.put(`http://localhost:3001/bloodpressure/${this.state.userID}`,
            {
                data: {
                    systolic: systolic,
                    diastolic: diastolic,
                    date: date
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/bloodpressure/${this.state.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let labels = json.data.map(data => data.date)
            let dataSystolic = json.data.map(data => data.systolic)
            let dataDiastolic = json.data.map(data => data.diastolic)
            console.log(labels)
            this.setState({
                data: {
                    labels: labels,
                    datasets: [{
                        label: "systolic",
                        data: dataSystolic
                    },
                    {
                        label: "diastolic",
                        data: dataDiastolic
                    }]
                }
            })
            this.setState({
                chartOrHistory: <Line data={this.state.data} />
            })
            console.log(this.state.chartOrHistory)
        })
    }

    render() {
        return (
            <div >
                <h1>Blood Pressure</h1>
                <input type="text" id="systolic" placeholder="systolic" />
                <input type="text" id="diastolic" placeholder="diastolic" />
                <input type="button" value="Add New Blood Pressure Data" onClick={this.AddBloodPressure} />
                <input type="button" value="Blood Pressure Chart" onClick={this.newChart} />

                <div className="chartHolder">{this.state.chartOrHistory}</div>

            </div>
        );
    }
}

export default BloodPressure;