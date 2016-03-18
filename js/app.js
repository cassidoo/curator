'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Opening = require('./components/opening');

var routes = (
  <Route path="/" component={Opening} />
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
