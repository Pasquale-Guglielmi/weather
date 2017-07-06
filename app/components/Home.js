var React = require('react');
var Form = require('./Form');

function Home (props) {
        return (
            <div className="home-container">
                <div className="column">
                    <h1>
                        Enter a City and State
                    </h1>
                    <Form onSubmit={props.onSubmit} class='column'/>
                </div>
            </div>
        )
}

module.exports = Home;