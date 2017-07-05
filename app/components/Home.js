var React = require('react');
var Form = require('./Form');
var api = require('../utils/api');

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="column">
                    <h1>
                        Enter a City and State
                    </h1>
                    <Form onSubmit={api.getWeather} class='column'/>
                </div>
            </div>
        )
    }
}

module.exports = Home;