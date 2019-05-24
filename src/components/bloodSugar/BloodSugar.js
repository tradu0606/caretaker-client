import React, { Component } from 'react';
import bloodSugar from '../../images/bloodSugar.png';
import './BloodSugar.css';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';

class BloodSugar extends Component {
	constructor() {
		super();
		this.state = {
			sugarLevelBeforeMeal: '',
			sugarLevelAfterMeal: '',
			ChartOrLogButton: 'Show Blood Sugar Log',
			
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault()
		const URL = `https://care-taker-app.herokuapp.com/sugarlevel/${this.props.userID}`;
		axios
			.put(URL, {
				sugarLevelBeforeMeal: this.state.sugarLevelBeforeMeal,
				sugarLevelAfterMeal: this.state.sugarLevelAfterMeal,
				date: new Date().toLocaleString()
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	componentDidMount() {
		const URL = `https://care-taker-app.herokuapp.com/sugarlevel/${this.props.userID}`;

		axios.get(URL).then((userSugarLevels) => {
			console.log(userSugarLevels);
			let labels = userSugarLevels.data.map((userSugarLevels) =>
				userSugarLevels.date.toString().replace('T', ' ').slice(0, 16)
			);
			let sugarLevelBeforeMeal = userSugarLevels.data.map(
				(userSugarLevels) => userSugarLevels.sugarLevelBeforeMeal
			);
			let sugarLevelAfterMeal = userSugarLevels.data.map(
				(userSugarLevels) => userSugarLevels.sugarLevelAfterMeal
			);
			console.log();
			this.setState({
				data: {
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
			});
			this.setState({
				chartOrHistory: <Bar data={this.state.data} />
			});
			console.log(this.state.data);
		});
	}
	ChartOrLog = (e) => {
		e.preventDefault();
		var tempReturn = [];
		if (this.state.swichButton === 'chart') {
			this.setState({
				chartOrHistory: <Bar data={this.state.data} />,
				swichButton: 'history',
				ChartOrLogButton: 'Show Blood Sugar Log'
			});
		} else {
			var templength = this.state.data.labels.length;
			function buidHistory(date, sugarLevelBeforeMeal, sugarLevelAfterMeal) {
				return (
					<div className="dataDiv">
						<p className="dataHolder">{date}</p>
						<p className="dataHolder">{sugarLevelBeforeMeal}</p>
						<p className="dataHolder">{sugarLevelAfterMeal}</p>
					</div>
				);
			}
			for (let i = 0; i < templength; i++) {
				tempReturn.push(
					buidHistory(
						this.state.data.labels[i],
						this.state.data.datasets[0].data[i],
						this.state.data.datasets[1].data[i]
					)
				);
			}
			tempReturn.unshift(
				<div className="dataDiv dataHeader">
					<p className="dataHolder">Date</p>
					<p className="dataHolder">Blood Sugar Before Meals</p>
					<p className="dataHolder">Blood Sugar After Meals</p>
				</div>
			);
			this.setState({
				chartOrHistory: tempReturn,
				swichButton: 'chart',
				ChartOrLogButton: 'Show Blood Sugar Chart'
			});
		}
	};
	render() {
		return (
			<div>
				<h1>
					Blood Sugar <img className="bloodSugarIcon" src={bloodSugar} />
				</h1>
				<div className="addNewBPDiv form2">
					<h3>Add New Blood Sugar</h3>
					<form>
						<input
							type="text"
							name="sugarLevelBeforeMeal"
							placeholder="sugar level before meal"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder="sugar level after meal"
							name="sugarLevelAfterMeal"
							onChange={this.handleInput}
						/>
						<input type="submit" value="submit" className="toggleButton" onClick={this.handleSubmit} />
					</form>
				</div>
				<div className="chartContainer">
					<input
						className="toggleButton"
						type="button"
						value={this.state.ChartOrLogButton}
						onClick={this.ChartOrLog}
					/>
					<div>{this.state.chartOrHistory}</div>
				</div>
			</div>
		);
	}
}

export default BloodSugar;
