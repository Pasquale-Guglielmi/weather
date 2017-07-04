var React = require('react');
var Form = require('./Form');
var api = require('../utils/api');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    render() {
        return (
            <div className="row nav">
                <h2 className="header">
                    Weather
                </h2>
                <Form onSubmit={api.getWeather}/>
            </div>
        )
    }
}

module.exports = Nav;