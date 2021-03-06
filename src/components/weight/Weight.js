import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import './Weight.css';
import icon from '../../images/weight.png';
import Delete from '../Delete';

class Weight extends Component {
	constructor() {
		super();
		this.state = {
			swichButton: 'history',
			errorStyle: {
				visibility: 'hidden'
			},

			weightData: [],
			ChartOrLogButton: 'Show Weight Log',
			id: [],
			schema: 'WeightModel',
			url: '/weight/'
		};
		this.ChartOrLog = this.ChartOrLog.bind(this);
	}
	// Blood Pressure Chart/Blood Pressure Log button functionality
	ChartOrLog = (e) => {
		console.log('works');
		e.preventDefault();
		var tempReturn = [];
		if (this.state.swichButton === 'chart') {
			this.setState({
				chartOrHistory: <Line data={this.state.data} />,
				swichButton: 'history',
				ChartOrLogButton: 'Show Weight Log'
			});
		} else {
			var templength = this.state.data.labels.length;
			let schema = this.state.schema;
			let url = this.state.url;
			function buidHistory(date, weight, id) {
				console.log(this);
				return (
					<div className="dataDiv">
						<div className="dataHolder">{date}</div>
						<div className="dataHolder">{weight}</div>
						<Delete id={id} url={url} />
					</div>
				);
			}
			for (let i = 0; i < templength; i++) {
				tempReturn.push(
					buidHistory(this.state.data.labels[i], this.state.data.datasets[0].data[i], this.state.id[i])
				);
			}
			tempReturn.unshift(
				<div className="dataDiv dataHeader">
					<div>Date</div>
					<div>Weight</div>
				</div>
			);
			this.setState({
				chartOrHistory: tempReturn,
				swichButton: 'chart',
				ChartOrLogButton: 'Show Weight Chart'
			});
		}
	};

	// Add new weight data, cheks if data is a number
	AddWeight = (e) => {
		e.preventDefault();
		let weight = document.querySelector('#weight').value;
		var date = new Date().toLocaleString();
		if (isNaN(parseFloat(weight))) {
			this.setState({
				errorStyle: {
					visibility: 'visible'
				},
				errorMessage: 'Please enter a number'
			});
		} else {
			axios.put(`https://care-taker-app.herokuapp.com/weight/${this.props.userID}`, {
				data: {
					weight: weight,
					date: date
				},
				headers: {
					'Content-Type': 'application/json'
				}
			});
			this.setState({
				errorStyle: {
					visibility: 'visible'
				},
				errorMessage: 'Added'
			});
			document.querySelector('#weight').value = '';
		}
	};
	// Loads weight data from DB
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
				let idTemp = json.data.map((data) => data._id);

				this.setState({
					data: {
						labels: dateTemp,
						datasets: [
							{
								fill: false,
								backgroundColor: 'rgb(222, 126, 105)',
								borderColor: '#399d96c2',
								label: 'weight (lbs)',
								data: weightDataTemp
							}
						],
						options: {
							title: {
								display: true,
								text: 'Weight'
							}
						}
					},
					id: idTemp
				});
				this.setState({
					chartOrHistory: <Line data={this.state.data} />
				});
				console.log(json);
			});
	}
	hideMessage = () => {
		this.setState({
			errorStyle: {
				visibility: 'hidden'
			}
		});
	};
	render() {
		return (
			<div>
				<h1>
					Weight<img className="icon" className="doctorsIcon" src={icon} />
				</h1>
				<div className="holder">
					<div className="formAppointment1">
						<h3>Add a New Weight Measure</h3>
						<p id="errorMessage" style={this.state.errorStyle}>
							{this.state.errorMessage}
						</p>
						<input type="text" id="weight" placeholder="weight (lbs)" onChange={this.hideMessage} />
						<input type="button" className="toggleButton" value="Add New Weight" onClick={this.AddWeight} />
					</div>
					<div className="formAppointment2">
						<input
							type="button"
							className="toggleButton"
							value={this.state.ChartOrLogButton}
							onClick={this.ChartOrLog}
						/>
						<div>{this.state.chartOrHistory}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Weight;
