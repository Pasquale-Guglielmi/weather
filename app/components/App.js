var React = require('react');
var Home = require('./Home');
var Nav = require('./Nav');
var Forecast = require('./Forecast');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div className='container'>
                        <Route render={function(props) {
                            return (
                                <Nav
                                    onSubmit={function (location) {
                                        props.history.push({
                                          pathname: '/forecast',
                                          search: '?city=' + location
                                        });
                                        console.log(location);}} />
                            )
                        }} />

                        <Route exact path='/' render={function(props) {
                            return (
                                <Home
                                    onSubmit={function (location) {
                                        props.history.push({
                                          pathname: '/forecast',
                                          search: '?city=' + location
                                        });
                                    }} />
                            )
                        }} />


                        <Route path='/forecast' component={Forecast} />
                </div>
            </Router>
        )
    }
}

module.exports = App;