import React from 'react';
import {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import todoApp from './reducers';
import * as CounterActions from './actions/counter';

let store = createStore(todoApp);

class Counter extends Component {
    render() {
        // Injected by connect() call:
        //const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <span onClick={console.log.bind(this.state)}>234234{this.state}</span>
                <button onClick={this.props.increment}>Hey</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

let App = connect(mapStateToProps, mapDispatchToProps)(Counter);


React.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
