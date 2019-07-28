import React, { Component } from 'react';
import axios from 'axios';

import Countdown from './Countdown';

export default class CountdownContainer extends Component {
    state= {
        events: []
    }

    fetchEvents = () => {
        const encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(res => {
            this.setState(() => {
                return {
                    events: res.data
                }
            });
        });
    }

    componentDidMount() {
        this.fetchEvents();
    }

    render() {
        return (
            <div className="App">
                <h1>Stuff be happening!</h1>
                <div className="countdownContainerGrid">
                    {this.state.events.map(event =>
                        <Countdown
                            key={event.Id}
                            title={event.Title}
                            month={event.Month}
                            day={event.Day}
                            year={event.Year}
                            image={event.Background}
                        />
                    )}
                </div>
            </div>
        )
    }
}
