var Immutable = require('immutable');
var initialState = Immutable.Map({
  myExperiments : Immutable.fromJS([{_id:1, name:'paper planes', active: true}])
});
console.log(initialState.toString());
module.exports = function(state, action) {
  state = state || initialState;
  return state;
};
