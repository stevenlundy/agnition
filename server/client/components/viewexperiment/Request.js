var React = require('react');

var Request = React.createClass({
  render: function() {
    return (
      <div>
      {/* //name as header */}
        <h3>{this.props.request.request}</h3>
        <span>{this.props.request.freq}</span>
      </div>
    );
  }
});

module.exports = Request;
