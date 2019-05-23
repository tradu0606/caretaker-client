import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';
import axios from 'axios';

class Delete extends Component {
    deleteDocument = () => {
        
        axios.delete(`http://localhost:3001${this.props.url}${this.props.id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                schema: this.props.schema
            }
        }).then(()=>{
            this.props.getData()
        })
        
    }
    render() {
        return (<div>
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
