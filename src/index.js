import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            position => console.log(position),
            // failure
            err => console.log(err)

        )
        return <div>Latitude:</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)