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
                            key={event.id}
                            title={event.title}
                            month={event.month}
                            day={event.day}
                            year={event.year}
                            image={event.background}
                        />
                    )}
                </div>
            </div>
        )
    }
}
