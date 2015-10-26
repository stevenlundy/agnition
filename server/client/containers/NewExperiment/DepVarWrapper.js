// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

var DepVar = require('./DepVar');

// import actions
var DepVarActions = require('../../actions/DependentVars');
var ExpActions = require('../../actions/Experiments');
var Actions = _.extend(ExpActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    depVars: state.Experiments.getIn([ownProps.expId, 'depVars']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVarWrapper = React.createClass({

  components: [],

  genComponent: function (event) {
    this.depVarId = Math.floor(Math.random() * 1000000);
    this.props.actions.createDepVar(this.depVarId);
    this.props.actions.addDepVar(this.depVarId, this.props.expId);
    this.components.push(<DepVar depVarId = {this.depVarId} />);
    this.forceUpdate();
  },

  render: function () {
    return (
      <div>
         {this.components}
        <button ref="depVarButton" onClick={this.genComponent}>add depvar</button>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(DepVarWrapper);