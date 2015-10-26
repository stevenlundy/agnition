var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');



var mapStateToProps = function (state, ownProps) {
  return {
    options : state.IndVars.get(ownProps.indVarId).toJS().options,
    name : state.IndVars.get(ownProps.indVarId).toJS().name
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SelectableOption = React.createClass ({
  render: function () {
    return (
      <label>
        <input type="radio" name={this.props.indVarId} value={this.props.optionIndex} />
        {this.props.optionValue}
      </label>
    )
  }
});

var SelectableOptions = React.createClass({
  handleChange : function(event) {
    // anytime the radio button is change, we write to the sample in the state
    this.props.actions.setIndVarOptionOnSample(this.props.sampleId, this.props.indVarId, event.target.value);
  },
  getOptions: function() {
    //creates an array of radio buttons
    var selectableOptions = [];
    _.each(this.props.options, function(optionValue, index) {
      var props = { 
        optionValue : optionValue,
        optionIndex : index,
        indVarId  : this.props.indVarId,
      }
      selectableOptions.push(<SelectableOption {...props}/>)
    },this);
    return selectableOptions;
  },
  render: function() {
    //displays a form composed of radio buttons tied to sample and indVarId
    var options = this.getOptions();
      return (
      <div>
      <span>select an option for independent variable: {this.props.name}</span>
      <form onChange={this.handleChange}>
      {options}
      </form>
      </div>
      )
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SelectableOptions);
