import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            position => {
                //we called setstate
                this.setState({ lat: position.coords.latitude })
            },
            // failure
            err => console.log(err)

        )
    }

    // Gotta define render!
    render() {
        return <div>Latitude {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)