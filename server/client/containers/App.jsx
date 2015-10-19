var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var LandingPage = require('../components/LandingPage.jsx');
var OpenExps = require('../components/OpenExps.jsx');
var UserActions = require('../actions/Users.jsx');


var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;
var render = require('react-dom').render;

function mapStateToProps(state) {
  console.log(state);
  return {
    user : state.Users.get('username')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

var App = React.createClass({

  render: function() {
    return (
      <div id="container">
        <OpenExps />
      </div>
    );
  }
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
