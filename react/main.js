var React = require('react');
var ReactDOM = require('react-dom');

var AddWord = require('./components/AddWord');
var Learn = require('./components/Learn');

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
                <div className="containers">
                    <AddWord  />
                    <Learn  />
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

ReactDOM.render(<Root />, document.getElementById('root'));
