import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

class FindOneDoctor extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			selectedDoctor: null
		};
		this.selectDoctor = this.selectDoctor.bind(this);
	}

	selectDoctor(evt) {
		console.log('FindOneDoctor: selectDoctor');
		console.log(this.props.doctors);
		let selectedDoctor = this.props.doctors.filter((doctor) => {
			return doctor.doctorName === evt.target.id;
		});
		this.setState({ selectedDoctor: selectedDoctor });
	}

	render() {
		console.log('FindOneDoctor: render');
		console.log(this.props.name);
		let doctorDetails;
		if (this.state.selectedDoctor) {
			console.log(this.state.selectedDoctor);
			doctorDetails = (
				<div>
					<h4 className="leftMargin"> Specialization: {this.state.selectedDoctor[0].doctorSpecialty}</h4>
					<h4 className="addressLabel">Address:</h4>
					<h4 className="leftMargin street"> Street:{this.state.selectedDoctor[0].street}</h4>
					<h4 className="leftMargin"> State:{this.state.selectedDoctor[0].state}</h4>
					<h4 className="leftMargin"> Zip Code:{this.state.selectedDoctor[0].zipcode}</h4>
					<h4 className="leftMargin paddingBottom"> Phone:{this.state.selectedDoctor[0].doctorPhone}</h4>
				</div>
			);
		} else {
			doctorDetails = <p> </p>;
		}

		// let singleDoctor = this.props.userDoctors.filter((doctor) => doctor.doctorName === this.props.selectDoctor);
		// console.log(singleDoctor);
		// console.log(singleDoctor[0]);
		// console.log(singleDoctor[0].doctorName);

		return (
			<div className="doctorRecord">
				<h3 onClick={this.selectDoctor} id={this.props.name} className="doctorNameOnRecord">
					{this.props.name}
					<FontAwesomeIcon className="chevronIcon" icon="chevron-down" />
				</h3>
				{doctorDetails}
				{/* <h4 className="leftMargin"> Specialization: {singleDoctor.doctorSpecialty}</h4>
				<h4 className="addressLabel">Address:</h4>
				<h4 className="leftMargin street"> Street:{singleDoctor.street}</h4>
				<h4 className="leftMargin"> State:{singleDoctor.state}</h4>
				<h4 className="leftMargin"> Zip Code:{singleDoctor.zipcode}</h4>
				<h4 className="leftMargin paddingBottom"> Phone:{singleDoctor.doctorPhone}</h4> */}
			</div>
		);
	}
}

export default FindOneDoctor;
