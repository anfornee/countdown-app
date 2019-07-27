import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import closeIcon from '../assets/images/close-cross-in-circular-outlined-interface-button-2.png';

export default class EventCreator extends Component {
    state = {
        title: '',
        year: 0,
        month: 0,
        day: 0,
        background: ""
    }

    titleChange = e => {
        this.setState({ title: e.target.value });
    }

    dateChange = e => {
        const dateArray = e.target.value.split('-');
        const year = parseInt(dateArray[0]);
        const month = parseInt(dateArray[1]);
        const day = parseInt(dateArray[2]);
        this.setState({
            year: year,
            month: month,
            day: day
        }
            // , () => {
            //     axios.post('http://localhost:3001/add-event', [this.state])
            //     .then(res => console.log('Data send'));
            // }
        );
    }

    onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/add-event', [this.state])
            .then(res => console.log('Data send', res.data[0].title));
    }

    render() {
        return (
            <div className="evntAddFormCont">
                <div className="eventAdderForm">
                    <Link style={{ position: "relative", alignSelf: "flex-start", bottom: "15px" }} to="/" ><img src={closeIcon} alt="close"></img></Link>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="title">Event Name: </label>
                        <input type="text" value={this.state.title} name="Title" onChange={this.titleChange} placeholder="Your mommas birthday" />
                        <br></br>
                        <br></br>
                        <label htmlFor="date">Day of Event:</label>
                        <input id="date" name="Date" onChange={this.dateChange} type="date" />
                        <br></br>
                        <br></br>
                        <button type="submit">Add it!</button>
                    </form>
                </div>
            </div>
        )
    }
}
