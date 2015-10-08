var React = require('react');
var ReactDOM = require('react-dom');

var QuestionA = React.createClass({
    render: function() {
        return <section className={this.props.className + " question-a-container"}>Section A</section>;
    }
});

var QuestionB = React.createClass({
    render: function() {
        return <section className={this.props.className + " question-b-container"}>Section B</section>;
    }
});

var Root = React.createClass({
    getInitialState: function() {
        return { question: 'a' };
    },

    render: function() {
        var qAclassName = this.state.question === 'a' ? 'active' : '';
        var qBclassName = this.state.question === 'b' ? 'active' : '';
        return (
            <div className="question">
                <QuestionA className={qAclassName} />
                <QuestionB className={qBclassName} />
                <div className="question-side-switcher" onClick={this.handleSideChanging}>Change</div>
            </div>
            );
    },

    handleSideChanging: function() {
        this.setState({question: this.state.question === 'a' ? 'b' : 'a' });
    }
});

ReactDOM.render(<Root />, document.body);
