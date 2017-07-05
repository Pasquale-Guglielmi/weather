var React = require('react');
var Form = require('./Form');

function Nav (props) {
        return (
            <div className="row nav">
                <h2 className="header">
                    Weather
                </h2>
                <Form onSubmit={props.onSubmit}/>
            </div>
        )
}

module.exports = Nav;