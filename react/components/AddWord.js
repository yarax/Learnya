import React, { findDOMNode, Component, PropTypes } from 'react';
let

export default class AddWord extends Component {


    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e => this._onAddClick(e)} onKeyDown={this._onKeyDown}>
                    Add
                </button>
            </div>
        );
    }

    _onAddClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    _onKeyDown(e) {
        if (e.keyCode === 13) {
            e.preventDefault();

        }
    }
    }
}

AddWord.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
