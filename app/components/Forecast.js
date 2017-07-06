var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

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
        this.fetchForecast(query);
    }

    componentWillReceiveProps() {
        this.setState(function() {
            return {
                loading: true
            }
        })
        var query = queryString.parse(this.props.location.search).city;
        this.fetchForecast(query);
    }

    fetchForecast(queryString) {
        api.getWeather(queryString)
            .then((results) => {
                this.setState(function() {
                    return {
                        loading: false,
                        results: results
                    };
                })
                console.log(this.state);
            })
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