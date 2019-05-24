import React, { Component } from 'react';
// import TimeInput from 'react-time-input';
import axios from 'axios'
import './Appointments.css'
import { Link } from 'react-router-dom';
import icon from '../../images/appointments.png'
import Delete from '../Delete'

class Appointment extends Component {
    constructor() {
        super()
        this.state = {
            selectOptions: [],
            // userID: this.props.userID,
            doctors: [],
            allAppointments: [],
            id: [],
            schema: "AppointmentModel",
            url: "/appointment/",
        }
    }

    componentDidMount() {
        axios.get(`https://care-taker-app.herokuapp.com/doctor/all/${this.props.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let tempDoc = json.data.map(doctor => doctor.doctorName)
            let idTemp = json.data.map(doctor => doctor._id)
            this.setState({
                doctors: tempDoc,
                id: idTemp
            })
            let selectOptions = tempDoc.map(doctorName => {
                return <option value={doctorName}>{doctorName}</option>
            })
            this.setState({
                selectOptions: selectOptions
            })
        })

        axios.get(`https://care-taker-app.herokuapp.com/appointment/${this.props.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(appointments => {
            console.log(this.state.id)
            let schema = this.state.schema
            let url = this.state.url
            let id = this.state.id
            console.log(id)
            let getData = this.getData
            let temp = appointments.data.map(appointment => {
                return (<tr>
                    <th>{appointment.date}</th>
                    <th>{appointment.date}</th>
                    <th>{appointment.doctorName}</th>
                    <th><Delete id={appointment._id} schema={schema} url={url} getData={getData} /></th>
                </tr>)
            })
            this.setState({
                allAppointments: temp
            })
        })


    }

    getData = (e) => {
        axios.put(`https://care-taker-app.herokuapp.com/new/${this.props.userID}`, {
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
    apointmentCreateButton = (e) => {
        e.preventDefault()
        this.getData()
    }

    render() {
        return (<div>
            <h1>
                Appointments <img className="icon" className="doctorsIcon" src={icon} />
            </h1>
            <div className="holder">
                <div className="formAppointment">
                    <h3>Make an Appointment</h3>
                    <select id="doctorName">
                        <option value="" >Choose a doctor</option>
                        {this.state.selectOptions}</select>
                    <form onSubmit={this.apointmentCreateButton}>
                        <Link to='/doctors'>
                            <input type="button" value="Add a Doctor" className="signInFirstNameField" />
                        </Link>
                        <input type="text" id="purpose" placeholder="purpose" className="signInFirstNameField" />
                        <input type="date" id="appDate" placeholder="date" className="signUpDoBField" />
                        <input type="text" id="appTime" placeholder="time" className="signInFirstNameField" />

                        <input id="apointmentCreateButton" type="submit" value="Submit" />
                    </form>
                </div >

                <div className="formAppointment">
                    <h3>My Appointments</h3>
                    <table >
                        <tr className="tableHeader">
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                        </tr>
                        {this.state.allAppointments}
                    </table>
                </div>
            </div>
        </div >
        );
    }
}

export default Appointment;