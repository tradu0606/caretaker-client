import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Delete from '../Delete';
library.add(faChevronDown);

class FindOneMedication extends Component {
	constructor() {
		super();
		console.log(this.props);
		this.state = {
			selectedMedication: null
		};
		this.selectMedication = this.selectMedication.bind(this);
	}
	selectMedication(evt) {
		evt.preventDefault();
		console.log('FindOneMedication: selectMedication');
		console.log(this.props.medications);
		console.log(evt.target);
		console.log(this.props.name);
		let selectedMedication = this.props.medications.filter((medication) => {
			return medication.medicationName === this.props.name;
		});
		this.setState({ selectedMedication: selectedMedication });
	}

	render() {
		console.log('FindOneMedication: render');
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
					<div className="center">
						<Delete id={this.props.id} url="/medication/" />
					</div>
				</div>
			);
		} else {
			medicationDetails = <p> </p>;
		}

		return (
			<div className="medicationRecord">
				<h3 onClick={this.selectMedication} id={this.props.name} className="doctorNameOnRecord">
					{this.props.name}
					<FontAwesomeIcon className="chevronIcon" icon="chevron-down" />
				</h3>
				{medicationDetails}
			</div>
		);
	}
}

export default FindOneMedication;
