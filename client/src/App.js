import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        data: null,
        num1: null,
        runMsg: null

    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.num1 + res.num2, num1: res.num1, num2: res.num2, runMsg: res.runMsg}))

            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data
                <p className="App-intro">{this.state.runMsg}</p>
            <p className="App-intro">Your first number is: {this.state.num1}</p>
                <p className="App-intro">Your second number is: {this.state.num2}</p>
                <p className="App-intro">Your total number is: {this.state.data}</p>


            </div>
    );
    }
}

export default App;