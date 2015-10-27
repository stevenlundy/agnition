var React = require('react');
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');
var SelectableOptions = require('./SelectableOptions');

var SelectNonRandomOptions = React.createClass({
  getSelectableOptions: function () {
    var selectableOptions = [];
    _.each(this.props.indVarIds, function(indVarid){
      var props = {
        indVarId: indVarid,
        sampleId: this.props.sampleId
      };
      selectableOptions.push(<SelectableOptions {...props}/>)
    }, this)

    return selectableOptions;
  },
  render: function () {
    var selectableOptions = this.getSelectableOptions();
    return (
      <div>
      {selectableOptions}
      </div>
    )
  }
})

module.exports = SelectNonRandomOptions