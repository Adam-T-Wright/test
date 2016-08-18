var React = require('react');

var AppContainer = React.createClass({

    render: function() {
        return (
            <div>
                <h1>Sky</h1>
                {this.props.children}
            </div>
        )
    }

});

module.exports = AppContainer;