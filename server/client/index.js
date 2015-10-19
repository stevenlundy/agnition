var App = require('./containers/App.jsx');
var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./stores/configureStore.jsx');
var ReactDOM = require('react-dom');

var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;

var LandingPage = require('./components/LandingPage.jsx');
var Exp = require('./components/Exp.jsx');
var OpenExps = require('./components/OpenExps.jsx');

// var ReduxRouter    = require('redux-router').ReduxRouter;
// var Link           = require('redux-router').Link;
//TODO: Implement DevTools and Browser History
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// import createHistory from 'history/lib/createBrowserHistory';

var store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route name='app' path='/' component={App}>
        <Route name='landingPage' path='/landing-page' component={LandingPage} />
        <Route name='experiments' path='/experiments' component={OpenExps} >
          <Route name='experiment' path='/experiment/:expId' component={Exp} />
        </Route>
      </Route>
    </Router>

  </Provider>,
  document.getElementById('root')
);

    // <ReduxRouter>
    //   <Route path="/" component={App}>
    //     <Route path="landing" component={Parent}>
    //       <Route path="home" component={Child} />
    //       <Route path="home/:id" component={Child} />
    //     </Route>
    //   </Route>
    // </ReduxRouter>
    // <DebugPanel top right bottom>
    //   <DevTools store={store} monitor={LogMonitor} />
    // </DebugPanel>
