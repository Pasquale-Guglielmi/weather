var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');


function DayItem(props) {
    var iconId = props.data.weather[0].icon;
    var iconURL = '/app/icons/' + iconId + '.svg'
    var date = new Date(props.data.dt*1000);
    return (
        <div className="day-item column">
            <img src={iconURL} className="icon" />
            <h2 className="day-header">{date.toDateString()}</h2>
        </div>
    )
}

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            results: {}
        };
    }

    componentDidMount() {
        this.setState(function() {
            return {
                loading: true
            }
        })
        this.city = queryString.parse(this.props.location.search).city;
        this.fetchForecast(this.city);

    }

    componentWillReceiveProps() {
        this.setState(function() {
            return {
                loading: true
            }
        })
        this.city = queryString.parse(this.props.location.search).city;
        this.fetchForecast(this.city);
    }

    fetchForecast(queryString) {
        api.getForecast(queryString)
            .then((results) => {
                this.setState(function() {
                    return {
                        loading: false,
                        results: results
                    };
                })
            })
    }

    render() {
        return (
            <div>
            {(this.state.loading)
                ? <div className="loading">LOADING</div>
                : <div>
                    <h2 className="forecast-header">{this.city}</h2>
                    <div className="forecast-container">
                        {this.state.results.map(function(dataObj) {
                            return <DayItem key={dataObj.dt} data={dataObj} />
                        }, this)}
                    </div>
                </div>}
            </div>
        )
    }
}

module.exports = Forecast;