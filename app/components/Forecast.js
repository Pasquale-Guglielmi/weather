var React = require('react');
var queryString = require('query-string');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            results: {}
        };
    }

    componentDidMount() {
        this.setState(function() {
            return {
                loading: true
            }
        })
        var query = queryString.parse(this.props.location.search).city;
        console.log(query);
    }

    render() {
        return (
            <div>
            {(this.state.loading) ? <div className="loading">LOADING</div> : <div>NOT LOADING</div>}
            </div>
        )
    }
}

module.exports = Forecast;