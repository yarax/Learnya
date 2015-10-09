var React = require('react');
var ReactDOM = require('react-dom');



var Learn = React.createClass({
    render: function() {
        return <section className={this.props.className + " question-b-container"}>Section B</section>;
    }
});

var Root = React.createClass({
    getInitialState: function() {
        return {
            addWord: 'active',
            learn: 'disabled'
        };
    },

    render: function() {

        return (
            <div>
                <button onClick={this.handleSideChanging.bind(this, 'addWord')}>Add word</button>
                <button onClick={this.handleSideChanging.bind(this, 'learn')}>Learn</button>

                <div className="containers">
                    <AddWord className={this.state.addWord} />
                    <Learn className={this.state.learn} />
                </div>
            </div>
            );
    },

    handleSideChanging: function(show) {
        if (show === 'addWord') {
            this.setState({addWord: 'active'});
            this.setState({learn: 'disabled'});
        } else {
            this.setState({addWord: 'disabled'});
            this.setState({learn: 'active'});
        }
    }
});

ReactDOM.render(<Root />, document.body);
