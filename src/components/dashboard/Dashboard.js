import React, { Component } from 'react';
import medication from '../../images/medications.png';
import bloodPressure from '../../images/bloodPressure.png';
import doctors from '../../images/doctors.png';
import dailyNote from '../../images/dailyNote.png';
import weight from '../../images/weight.png';
import bloodSugar from '../../images/bloodSugar.png';
import appointments from '../../images/appointments.png';
import metrics from '../../images/metrics.jpg';
import '../dashboard/Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>
				<div className="rowOne">
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={medication} />
						</div>
						<h6>Medication</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={bloodPressure} />
						</div>
						<h6>Blood Pressure</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={bloodSugar} />
						</div>
						<h6>Blood Sugar</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={dailyNote} />
						</div>
						<h6>Daily Notes</h6>
					</div>
				</div>
				<div className="rowTwo">
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={metrics} />
						</div>
						<h6>Metrics</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={doctors} />
						</div>
						<h6>Doctors</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={appointments} />
						</div>
						<h6>Appointments</h6>
					</div>
					<div className="dashboardComponent">
						<div className="resizeImageDiv">
							<img className="resizeImage" src={weight} />
						</div>
						<h6>Weight</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
