import React, { Component } from 'react';
import AddWord from '../components/AddWord';
import Learn from '../components/Learn';

export default class App extends Component {

    getInitialState() {
        return {
            route: AddWord
        }
    }

    render() {
        var Container = this.state.route;
        return (
            <div>
                <button onClick = {this.state.route = AddWord}>Add word</button>
                <button onClick = {this.state.route = Learn}>Learn</button>
                <div className="container">
                    <Container/>
                </div>
            </div>
        );
    }
}
