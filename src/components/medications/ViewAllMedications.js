import React, { Component } from 'react';
import axios from 'axios';
import FindOneMedication from './FindOneMedication';

class ViewAllMedications extends Component {
	constructor() {
		super();
		this.state = {
			userMedications: [],
			selectMedication: ''
		};
	}
	componentDidMount() {
		console.log('ViewAllMedications: componentDidMount');
		axios
			.get(`https://care-taker-app.herokuapp.com/medication/all/${this.props.userID}`)
			.then((userMedications) => {
				console.log(userMedications);
				this.setState({ userMedications: userMedications.data });
			});
	}

	render() {
		console.log('ViewAllMedications: render');
		if (this.state.userMedications) {
			return (
				<div className="medicationLinksContainer">
					<h3 className="medicationsListTitle">Your Medications</h3>
					{this.state.userMedications.map((medication, i) => {
						return (
							<FindOneMedication
								medications={this.state.userMedications}
								id={medication._id}
								key={i}
								name={medication.medicationName}
							/>
						);
					})}
				</div>
			);
		} else {
			return <h3 className="medicationsListTitle">Your Medications</h3>;
		}
	}
}

export default ViewAllMedications;
