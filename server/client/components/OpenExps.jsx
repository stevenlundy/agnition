var React = require('react');
var connect = require('react-redux').connect;
// var ExpActions = require('../actions/Exp.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var Exp = require('./Exp.jsx');

function mapStatetoProps (state) {
  return {
    myExperiments: state.Experiments.get('myExperiments').toArray()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
  };
}

var ProductRow = React.createClass({
  render: function() {
    return (
      <tr >
        <td>{this.props.exp.name}</td>
        <td>{this.props.exp._id}</td>
        <td><Link to='experiment/{this.props.exp._id}'>To the Science!!</Link></td>
      </tr>
    );
  }
});

var OpenExps = React.createClass({
  render: function() {
    var rows = [];
    console.log('this.props.myExperiments =', this.props.myExperiments);
    this.props.myExperiments.filter({function(exp) {
          return exp.get('active');
        }}).forEach(function(exp) {
      rows.push(<ExpRow exp={exp} />)
    });
    return (
      <table className='open-exps'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hypothesis</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(OpenExps);
