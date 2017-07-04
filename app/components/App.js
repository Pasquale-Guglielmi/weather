var React = require('react');
var Home = require('./Home');
var Nav = require('./Nav');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={function() {
                            return <p>Not Fount</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;