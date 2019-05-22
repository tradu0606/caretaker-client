import React, { Component } from 'react';
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'
import './Weight.css'

class Weight extends Component {
    constructor() {
        super()
        this.state = {
            swichButton: "history",
            errorStyle: {
                visibility: "hidden"
            },
            userID: "5ce2ef62116c10b9d385c064",
            weightData: [],
            ChartOrLogButton: "Show Weight Log"
        }

    }
    // Blood Pressure Chart/Blood Pressure Log button functionality
    ChartOrLog = (e) => {
        console.log("works")
        e.preventDefault()
        var tempReturn = []
        if (this.state.swichButton === "chart") {
            this.setState({
                chartOrHistory: <Line data={this.state.data} />,
                swichButton: "history",
                ChartOrLogButton: "Show Weight Log"
            })

        } else {
            var templength = this.state.data.labels.length
            function buidHistory(date, weight) {
                return (<div className="dataDiv">
                    <p className="dataHolder">{date}</p>
                    <p className="dataHolder">{weight}</p>
                </div>)
            }
            for (let i = 0; i < templength; i++) {
                tempReturn.push(buidHistory(this.state.data.labels[i], this.state.data.datasets[0].data[i]))
            }
            this.setState({
                chartOrHistory: tempReturn,
                swichButton: "chart",
                ChartOrLogButton: "Show Weight Chart"
            })
        }
    }

    // Add new weight data, cheks if data is a number
    AddWeight = (e) => {
        e.preventDefault()
        let weight = document.querySelector('#weight').value
        var date = new Date().toLocaleString()
        if (isNaN(parseFloat(weight))) {
            this.setState({
                errorStyle: {
                    visibility: "visible"
                }
            })
        } else {
            axios.put(`http://localhost:3001/weight/${this.state.userID}`,
                {
                    data: {
                        weight: weight,
                        date: date
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            this.setState({
                errorStyle: {
                    visibility: "hidden"
                }
            })
            document.querySelector('#weight').value = ""
        }
    }
    // Loads weight data from DB
    componentDidMount() {
        axios.get(`http://localhost:3001/weight/${this.state.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let weightDataTemp = json.data.map(data => data.weight)
            let dateTemp = json.data.map(data => data.date.toString().replace("T", " ").slice(0, 16))

            this.setState({
                data: {
                    labels: dateTemp,
                    datasets: [{
                        fill: false,
                        backgroundColor: "blue",
                        borderColor: "blue",
                        label: "weight",
                        data: weightDataTemp
                    }],
                    options: {
                        title: {
                            display: true,
                            text: "Weight"
                        }

                    }
                }
            })
            this.setState({
                chartOrHistory: <Line data={this.state.data} />
            })
            console.log(json)
        })
    }
    render() {
        return (
            <div>
                <h1>Weight</h1>
                <div className="holder">
                    <div className="formAppointment">

                        <p id="errorMessage" style={this.state.errorStyle}>Please enter a number</p>
                        <input type="text" id="weight" placeholder="weight" />
                        <input type="button" value="Add New Weight Data" onClick={this.AddWeight} />
                    </div>
                    <div className="formAppointment">
                        <input type="button" value={this.state.ChartOrLogButton} onClick={this.ChartOrLog} />
                        <div>{this.state.chartOrHistory}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Weight;