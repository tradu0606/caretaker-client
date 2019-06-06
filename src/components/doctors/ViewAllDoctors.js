import React, { Component } from 'react';
import axios from 'axios';
import FindOneDoctor from './FindOneDoctor';

class ViewAllDoctors extends Component {
	constructor() {
		super();
		this.state = {
			userDoctors: [],
			selectDoctor: ''
		};
	}
	componentDidMount() {
		console.log('ViewAllDoctors: componentDidMount');
		axios.get(`https://care-taker-app.herokuapp.com/doctor/all/${this.props.userID}`).then((userDoctors) => {
			console.log(userDoctors);
			this.setState({ userDoctors: userDoctors.data });
		});
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
						return (
							<FindOneDoctor
								userID={this.props.userID}
								doctors={this.state.userDoctors}
								key={i}
								name={doctor.doctorName}
							/>
						);
					})}
				</div>
			);
		} else {
			return <p>Pick a doctor</p>;
		}
	}
}

export default ViewAllDoctors;
