var React = require('react');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');
var Hypothesis = require('./Hypothesis');

var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <header className="header">
          <Signin />
          <h1>Agnition</h1>
        </header>
          <About />
      </div>
    );
  }
});

module.exports = LandingPage;