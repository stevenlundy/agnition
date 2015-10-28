var index = require('../index.js')();
var mocha = require('mocha');
var expect = require('chai').expect;

var testData = require('../../utilspecs/testStoreData');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

var sinon = require('sinon');


//mock out the sub-component
var SubmitExperiment = require('../../../server/client/containers/NewExperiment/SubmitExperiment');

describe('Submit Experiment', function () {
  var root, submitExperiment, JSONresponse, stub;
  beforeEach(function () {

    root = document.createElement('div');
    var props = {
      expId: '88152'
    };

    //this is our mock of the store
    props.store = mockStore(testData);

    stub = sinon.stub(SubmitExperiment.prototype.__reactAutoBindMap, "handleClick");
    submitExperiment = TestUtils.renderIntoDocument(React.createElement(SubmitExperiment, props), root);
    console.dir(submitExperiment);

  });
  afterEach(function () {
    ReactDOM.unmountComponentAtNode(root);
  });

  it('should post a new experiment when clicked', function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(submitExperiment, 'button');
    TestUtils.Simulate.click(button);

  });
});
