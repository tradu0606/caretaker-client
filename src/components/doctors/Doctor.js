import React, { Component } from 'react';
import doctor from '../../images/doctors.png';
import './Doctor.css';

class Doctor extends Component {
	render() {
		return (
			<div>
				<h1>
					Doctors <img className="doctorsIcon" src={doctor} />
				</h1>
				<div>
					<div className="form">
						<form>
							<h3>Add a New Doctor</h3>
							<input type="text" placeholder="doctor name" />
							<label className="addressLabel">Address</label>
							<input type="text" placeholder="street" />
							<input type="text" placeholder="city" />
							<select>
								<option value="AL">AL</option>
								<option value="AK">AK</option>
								<option value="AR">AR</option>
								<option value="AZ">AZ</option>
								<option value="CA">CA</option>
								<option value="CO">CO</option>
								<option value="CT">CT</option>
								<option value="DC">DC</option>
								<option value="DE">DE</option>
								<option value="FL">FL</option>
								<option value="GA">GA</option>
								<option value="HI">HI</option>
								<option value="IA">IA</option>
								<option value="ID">ID</option>
								<option value="IL">IL</option>
								<option value="IN">IN</option>
								<option value="KS">KS</option>
								<option value="KY">KY</option>
								<option value="LA">LA</option>
								<option value="MA">MA</option>
								<option value="MD">MD</option>
								<option value="ME">ME</option>
								<option value="MI">MI</option>
								<option value="MN">MN</option>
								<option value="MO">MO</option>
								<option value="MS">MS</option>
								<option value="MT">MT</option>
								<option value="NC">NC</option>
								<option value="NE">NE</option>
								<option value="NH">NH</option>
								<option value="NJ">NJ</option>
								<option value="NM">NM</option>
								<option value="NV">NV</option>
								<option value="NY">NY</option>
								<option value="ND">ND</option>
								<option value="OH">OH</option>
								<option value="OK">OK</option>
								<option value="OR">OR</option>
								<option value="PA">PA</option>
								<option value="RI">RI</option>
								<option value="SC">SC</option>
								<option value="SD">SD</option>
								<option value="TN">TN</option>
								<option value="TX">TX</option>
								<option value="UT">UT</option>
								<option value="VT">VT</option>
								<option value="VA">VA</option>
								<option value="WA">WA</option>
								<option value="WI">WI</option>
								<option value="WV">WV</option>
								<option value="WY">WY</option>
							</select>
							<input
								id="zip"
								name="zip"
								type="text"
								className="zipCodeField"
								placeholder="zipcode"
								pattern="[0-9]*"
							/>
							<input
								type="tel"
								placeholder="phone"
								name="phone"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								required
							/>
							<input type="text" placeholder="medication perscribed" />
							<label>Next Appointment</label>
							<input type="date" placeholder="appointment" />
							<input type="submit" className="doctorSubmitButton" value="submit" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Doctor;
