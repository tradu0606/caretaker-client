import React, { Component } from 'react';
import axios from 'axios';
import FindOneMedication from './FindOneMedication';

const URL = 'http://localhost:3001/medication/all/5ce2d402236655a1648b00f5';

class ViewAllMedications extends Component {
	constructor() {
		super();
		this.state = {
			userMedications: [],
			selectMedication: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		console.log('ViewAllMedications: componentDidMount');
		axios.get(URL).then((userMedications) => {
			console.log(userMedications);
			this.setState({ userMedications: userMedications.data });
		});
	}
	handleClick(event) {
		console.log('ViewAllMedications: handleClick');
		console.log(event.target.name);
		this.setState({ selectMedication: event.target.name });
	}

	render() {
		console.log('ViewAllMedications: render');
		if (this.state.userMedications) {
			let medication;
			if (this.state.selectMedication) {
				medication = this.state.selectMedication;
			} else {
				medication = <p>Pick a Medication</p>;
			}
			return (
				<div className="doctorLinksContainer">
					<h3 className="doctorsListTitle">Your Medications</h3>
					{this.state.userMedications.map((medication, i) => {
						return (
							<FindOneMedication
								medications={this.state.userMedications}
								key={i}
								name={medication.medicationName}
							/>
						);
					})}
				</div>
			);
		} else {
			return <p>Pick a Medication</p>;
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

export default ViewAllMedications;
