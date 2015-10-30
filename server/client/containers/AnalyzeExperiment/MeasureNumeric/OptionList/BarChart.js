//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../../../utils/componentUtils');
var BarChart = require("react-d3").BarChart;
var d3 = require('d3');

// componet that takes in indvarID + measureID
mapStateToProps = function(state, ownProps){
    var samples = getSamplesForMeasure(state, ownProps.measureId, ownProps.indVarId);
    return {
        indVar : state.IndVars.get(ownProps.indVarId).toJS(),
        measure : state.Measures.get(ownProps.measureId).toJS(),
        samples : samples
    };
};

var Chart = React.createClass({
    genChartData : function() {
        return [{
            name: this.props.measure.id,
            values: utils.genSingleSeriesBarChartValues(this.props.indVar.options, this.props.samples)
        }];
    },
    render: function() {
        return (
            <div>
                <BarChart data={genChartData()} width={500} height={300} title="Bar Chart" yAxisLabel="Label" xAxisLabel="Value"/>
            </div>
        );
    }
});

// export chart
module.exports = connect(mapStateToProps)(Chart);
