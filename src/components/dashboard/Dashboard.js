import React, { Component } from 'react';
import medication from '../../images/medications.png';
import bloodPressure from '../../images/bloodPressure.png';
import doctors from '../../images/doctors.png';
import dailyNote from '../../images/dailyNote.png';
import weight from '../../images/weight.png';
import bloodSugar from '../../images/bloodSugar.png';
import appointments from '../../images/appointments.png';
import metrics from '../../images/metrics.jpg';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>
				<div className="rowOne" />
				<div className="dashboardComponent">
					<img src={medication} />
					<h6>Medication</h6>
				</div>
				<div className="dashboardComponent">
					<img src={bloodPressure} />
					<h6>Blood Pressure</h6>
				</div>
				<div className="dashboardComponent">
					<img src={bloodSugar} />
					<h6>Blood Sugar</h6>
				</div>
				<div className="dashboardComponent">
					<img src={dailyNote} />
					<h6>Daily Notes</h6>
				</div>
				<div className="rowTwo">
					<div className="dashboardComponent">
						<img src={metrics} />
						<h6>Metrics</h6>
					</div>
					<div className="dashboardComponent">
						<img src={doctors} />
						<h6>Doctors</h6>
					</div>
					<div className="dashboardComponent">
						<img src={appointments} />
						<h6>Appointments</h6>
					</div>
					<div className="dashboardComponent">
						<img src={weight} />
						<h6>Weight</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
