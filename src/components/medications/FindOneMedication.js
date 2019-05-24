import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

class FindOneMedication extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			selectedMedication: null
		};
		this.selectMedication = this.selectMedication.bind(this);
	}

	selectMedication(evt) {
		console.log('FindOneMedication: selectMedication');
		console.log(this.props.medications);
		let selectedMedication = this.props.medications.filter((medication) => {
			return medication.medicationName === evt.target.id;
		});
		this.setState({ selectedMedication: selectedMedication });
	}

	render() {
		console.log('FindOneMedication: render');
		// console.log(this.props.userMedications);
		console.log(this.props.name);
		let medicationDetails;
		if (this.state.selectedMedication) {
			console.log(this.state.selectedMedication);
			medicationDetails = (
				<div>
					<h4 className="leftMargin"> Purpose: {this.state.selectedMedication[0].purpose}</h4>
					<h4 className="leftMargin street"> Dosage:{this.state.selectedMedication[0].dosage}</h4>
					<h4 className="leftMargin"> Start Date:{this.state.selectedMedication[0].startDate}</h4>
					<h4 className="leftMargin"> End Date:{this.state.selectedMedication[0].endDate}</h4>
				</div>
			);
		} else {
			medicationDetails = <p> </p>;
		}

		return (
			<div className="medicationRecord">
				<h3 onClick={this.selectMedication} id={this.props.name} className="medicationNameOnRecord">
					{this.props.name}
					<FontAwesomeIcon className="chevronIcon" icon="chevron-down" />
				</h3>
				{medicationDetails}
			</div>
		);
	}
}

export default FindOneMedication;
