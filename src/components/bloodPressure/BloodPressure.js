import React, { Component } from 'react';
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2'
import './BloodPressure.css'
import icon from '../../images/bloodPressure.png'
import Delete from '../Delete'


class BloodPressure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorStyle: {
                visibility: "hidden"
            },
            ChartOrLogButton: "Show Blood Pressure Log",
            chartOrHistory: null,
            swichButton: "history",
            // userID: this.props.userID,            
            id: [],
            schema: "BloodPressureModel",
            url: "/bloodpressure/",
            data: {labels: [],
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

    ChartOrLog = (e) => {
        e.preventDefault()
        var tempReturn = []
        if (this.state.swichButton === "chart") {
            this.setState({
                chartOrHistory: <Line data={this.state.data} />,
                swichButton: "history",
                ChartOrLogButton: "Show Blood Pressure Log"
            })
            e.target.value = "Blood Pressure Chart"
        } else {
            console.log(this.state.id)
            let schema = this.state.schema
            let url = this.state.url
            let templength = this.state.data.labels.length
            let getData = this.getData
            function buidHistory(date, systolic, diastolic, id) {
                return (<div className="dataDiv">
                    <p className="dataHolder">{date}</p>
                    <p className="dataHolder">{systolic}</p>
                    <p className="dataHolder">{diastolic}</p>
                    <Delete id={id} schema={schema} url={url} getData={getData}/>
                </div>)
            }
            for (let i = 0; i < templength; i++) {
                tempReturn.push(buidHistory(this.state.data.labels[i], this.state.data.datasets[0].data[i], this.state.data.datasets[1].data[i], this.state.id[i]))
            }
            tempReturn.unshift(<div className="dataDiv dataHeader">
            <p className="dataHolder">Date</p>
            <p className="dataHolder">Systolic</p>
            <p className="dataHolder">Diastolic</p>
            <p className="dataHolder"></p>
        </div>)
            this.setState({
                chartOrHistory: tempReturn,
                swichButton: "chart",
                ChartOrLogButton: "Show Blood Pressure Chart"
            })
        }
    }

    AddBloodPressure = (e) => {
        e.preventDefault()
        var systolic = document.querySelector('#systolic').value
        var diastolic = document.querySelector('#diastolic').value
        var date = new Date().toLocaleString()
        console.log(isNaN(parseFloat(systolic)))
        if (isNaN(parseFloat(systolic)) || isNaN(parseFloat(diastolic))) {
            this.setState({
                errorStyle: {
                    visibility: "visible"
                }
            })
        } else {
            axios.put(`https://care-taker-app.herokuapp.com/bloodpressure/${this.props.userID}`,
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
            this.setState({
                errorStyle: {
                    visibility: "hidden"
                }
            })
        }
    }
    getData=()=>{
        axios.get(`https://care-taker-app.herokuapp.com/bloodpressure/${this.props.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let labels = json.data.map(data => data.date.toString().replace("T", " ").slice(0, 16))
            let dataSystolic = json.data.map(data => data.systolic)
            let dataDiastolic = json.data.map(data => data.diastolic)
            let id = json.data.map(data => data._id)
            console.log(labels)
            this.setState({
                id: id,
                data: {
                    labels: labels,
                    datasets: [{
                        fill: false,
                        backgroundColor: "blue",
                        borderColor: "blue",
                        label: "systolic",
                        data: dataSystolic
                    },
                    {
                        fill: false,
                        backgroundColor: "red",
                        borderColor: "red",
                        label: "diastolic",
                        data: dataDiastolic
                    }],
                    options: {
                        title: {
                            display: true,
                            text: "Blood Pressure"
                        }

                    }
                }
            })
            if (this.state.chartOrHistory === null){
            this.setState({
                chartOrHistory: <Line data={this.state.data} />
            })}
        })
    }
    componentDidMount() {
        this.getData()


    }


	render() {
		return (
			<div>
				<h1>
					Blood Pressure<img className="icon" className="doctorsIcon" src={icon} />
				</h1>
				<div className="holder">
					<div className="formAppointment">
						<h3>Add a New BP Messure</h3>
						<p id="errorMessage" style={this.state.errorStyle}>
							Please enter a number
						</p>
						<input type="text" id="systolic" placeholder="systolic" />
						<input type="text" id="diastolic" placeholder="diastolic" />
						<input type="button" value="submit" className="toggleButton" onClick={this.AddBloodPressure} />
					</div>
					<div className="formAppointment">
						<input
							type="button"
							className="toggleButton"
							value={this.state.ChartOrLogButton}
							onClick={this.ChartOrLog}
						/>
						<div className="chartHolder">{this.state.chartOrHistory}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BloodPressure;
