import './App.css';
import React, { Component } from "react";

/**
 * The default example is a function, but we'll refactor this to a class
 * Then, we'll use some simple state and a simple UI presentation
 */
export default class AppComponent extends Component {

    /**
     * Create a constructor so we can initialize our own fields
     */
    constructor(props) {
        super(props);

        // initialize the state, which only has one prop here
        this.state = {
            randNumVal: this.newRandomNumber()
        };

        // bind "this" to callbacks so we have reference to the instance
        this.updateRandNumVal = this.updateRandNumVal.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Randon Number Generator
                    </p>
                </header>
                <p>Click the button below to generate a new number:</p>
                <button className="App-generate" onClick={this.updateRandNumVal}>Generate!</button>
                <br />
                <hr className="App-sep" />
                <p className="App-rand-val">{this.state.randNumVal}</p>
            </div>
        );
    }

    /**
     * Update the state with a new random number
     * Be sure to create new state object
     * instead of mutating existing one
     */
    updateRandNumVal() {
        this.setState({
            ...this.state,
            randNumVal: this.newRandomNumber()
        });
    }

    /**
     * Return a random number from  -1000 to 1000
     */
    newRandomNumber() {
        return Math.floor(Math.random() * 2000) - 1000;
    }

}
