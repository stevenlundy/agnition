var React = require('react');
var connect = require('react-redux').connect;
// var ExpActions = require('../actions/Exp.jsx');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state) {
  return {
    experiments: state.get('myExperiments')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(ExpActions, dispatch)
  };
}

var Exp = React.createClass({

  render: function() {
    var experiment = experiments.filter(function(exp) {
      return exp._id === this.props.params.expId;
    }.bind(this))[0];
    return (
      <div className="exp">
        {experiment.name}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Exp);
