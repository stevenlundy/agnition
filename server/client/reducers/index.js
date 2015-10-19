var Redux = require('redux');
// var CreateExp  = require('./CreateExp.jsx');
var Users = require('./Users.jsx');
var Hypothesis = require('./Hypothesis.jsx');
var Experiments = require('./Experiments.jsx');
module.exports = Redux.combineReducers({ 

  Users : Users,
  Hypothesis : Hypothesis,
  Experiments : Experiments,

});
