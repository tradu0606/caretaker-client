import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';
import axios from 'axios';

class Delete extends Component {
	deleteDocument = () => {
		axios.delete(`https://care-taker-app.herokuapp.com${this.props.url}${this.props.id}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		// .then(()=>{
		//     this.props.getData()
		// })
	};
	render() {
		return (
			<div>
				<button onClick={this.deleteDocument}>Delete</button>
			</div>
		);
	}
}

export default Delete;

//         //     //     AppointmentModel
//         //     //     UserModel
//         //     //     BloodPressureModel
//         //     //     DoctorModel
//         //     //     MedicationModel
//         //     //     SugarLevelModel
//         //     //     WeightModel
