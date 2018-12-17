import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        //  the  only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            position => {
                //we called setstate
                this.setState({ lat: position.coords.latitude })
            },
            // failure
            err => {
                this.setState({ errorMessage: err.message })
            }

        )
    }

    // Gotta define render!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading location!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)