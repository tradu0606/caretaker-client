import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FindOneDoctor from './FindOneDoctor';


class ViewAllDoctors extends Component {
	constructor() {
		super();
		this.state = {
			userDoctors: [],
			selectDoctor: '',
			// userID: this.props.userID
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		console.log('ViewAllDoctors: componentDidMount');
		axios.get(`https://care-taker-app.herokuapp.com/doctor/all/${this.props.userID}`).then((userDoctors) => {
			console.log(userDoctors);
			this.setState({ userDoctors: userDoctors.data });
		});
	}
	handleClick(event) {
		console.log('ViewAllDoctors: handleClick');
		console.log(event.target.name);
		this.setState({ selectDoctor: event.target.name });
	}

	render() {
		console.log('ViewAllDoctors: render');
		if (this.state.userDoctors) {
			let doctor;
			if (this.state.selectDoctor) {
				doctor = this.state.selectDoctor;
			} else {
				doctor = <p>Pick a doctor</p>;
			}
			return (
				<div className="doctorLinksContainer">
					<h3 className="doctorsListTitle">Your Doctors</h3>
					{this.state.userDoctors.map((doctor, i) => {
						return <FindOneDoctor userID={this.props.userID} doctors={this.state.userDoctors} key={i} name={doctor.doctorName} />;
					})}
				</div>
			);
		} else {
			return <p>Pick a doctor</p>;
		}
		// console.log(this.state.selectDoctor);
		// let selectDoctor;
		// if (this.state.selectDoctor) {
		// 	console.log('triggered');
		// 	selectDoctor = (
		// 		<FindOneDoctor selectDoctor={this.state.selectDoctor} userDoctors={this.state.userDoctors} />
		// 	);
		// } else {
		// 	selectDoctor = null;
		// }
		// return (
		// 	<div>
		// 		<div className="doctorLinksContainer">
		// 			<h3 className="doctorsListTitle">Your Doctors</h3>
		// 			{this.state.userDoctors.map((doctor, i) => {
		// 				return (
		// 					<h2 onClick={this.handleClick} className="doctorLinks">
		// 						{doctor.doctorName}
		// 					</h2>
		// 				);
		// 			})}
		// 		</div>
		// 		{selectDoctor}
		// 	</div>
		// );
	}
}

export default ViewAllDoctors;
