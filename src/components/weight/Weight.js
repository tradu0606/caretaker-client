import React, { Component } from 'react';
import axios from 'axios';

class Weight extends Component {
    constructor() {
        super()
        this.state = {
            userID: "5ce2ef62116c10b9d385c064",
            weightData: []
        }

    }
    AddWeight = (e) => {
        e.preventDefault()
        let weight = document.querySelector('#weight').value
        var date = new Date().toLocaleString()
        axios.put(`http://localhost:3001/weight/${this.state.userID}`,
            {   data:{
                weight: weight,
                date: date
            },
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/weight/${this.state.userID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(json => {
            let weightDataTemp = json.data.map(data => data.weight)
            let dateTemp = json.data.map(data => data.weight)
            this.setState({
                weightData: weightDataTemp,
                date: dateTemp
            })
            console.log(json)
        })
    }
    render() {
        return (
            <div>
                <input type="text" id="weight" placeholder="weight" />
                <input type="button" value="Add New Weight Data" onClick={this.AddWeight} />
            </div>
        );
    }
}

export default Weight;