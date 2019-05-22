import React, { Component } from 'react';

class DoctorSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ''
		};
		this.handleSearchInput = this.handleSearchInput.bind(this);
	}
	handleSearchInput(event) {
		this.setState({ searchInput: event.target.value.toLowerCase() });
	}
	render() {
		return <div />;
	}
}

export default DoctorSearch;

// let selectDoctor = this.props.userData.filter((doctors) => doctor.name === this.state.searchInput);
// 		console.log(selectCountry);
// 		let doctorHTML;

// 		let match = { params: { name: this.state.searchInput } };

// 		if (selectCountry.length > 0) {
// 			doctorHTML = <Read match={match} countriesData={selectCountry} />;
// 		}
// 		return (
// 			<div className="center">
// 				<h1 className="searchHeading ">
// 					Find a doctor{' '}
// 					<form>
// 						<input
// 							className="searchCountryField"
// 							type="text"
// 							placeholder="doctor name here"
// 							onChange={this.handleSearchInput}
// 						/>
// 					</form>
// 				</h1>

// 				{doctorHTML}
// 			</div>
// 		);
