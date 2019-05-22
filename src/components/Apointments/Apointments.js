import React, { Component } from 'react';
import TimeInput from 'react-time-input';
import axios from 'axios'

class Appointment extends Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/doctor/${this.state.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json =>
            this.setState({
                doctors: json.data.map(doctor => doctor.doctorName)
            }))
        let selectOptions = this.state.doctors.map(doctorName => {
            return <option value={doctorName}>{doctorName}</option>
        })
        this.setState({
            selectOptions: selectOptions
        })
    }
    signInSubmitButton = () => {
        axios.put(`http://localhost:3001/appointment/new/${this.state.userID}`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                doctorName: document.querySelector("#doctorName").value,
                purpose: document.querySelector("#purpose").value,
                date: document.querySelector("#appDate").value,
                time: document.querySelector("#appTime").value

            }
        })
    }

    render() {
        return (
            <div>
                <h2>Select doctor</h2>
                <select  id="doctorName">{this.state.selectOptions}</select>
                <input type="button" value="Add a Doctor" className="signInFirstNameField" />
                <input type="text" id="purpose" placeholder="purpose" className="signInFirstNameField" />
                <input type="date" id="appDate" placeholder="date" className="signUpDoBField" />
                <TimeInput
                    initTime='00:00'
                    ref="TimeInputWrapper"
                    className='form-control'
                    mountFocus='true'
                    id='appTime'
                />

                <input id="signInSubmitButton" type="submit" value="Submit" />
            </div>
        );
    }
}

export default Appointment;