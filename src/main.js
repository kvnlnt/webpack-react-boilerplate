'use strict';

var settings = {};
var css = require('./css/main.css');
var React = require('react');
var MainComponent = require('./js/MainComponent');

// render base component
React.render(<MainComponent />, document.getElementById('main'));