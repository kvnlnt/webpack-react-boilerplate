'use strict';

var settings = {};
var css = require('./css/main.css');
var React = require('react');
// var Wall = require('./js/wall').form;
var Builder = require('./js/builder').form;

// render base component
// React.render(<Wall 
//     studs="twoBySix" 
//     insulation="none"
//     width="20" 
//     height="10" 
//     onCenter="16" />, 
//     document.getElementById('building'));

React.render(<Builder />, document.getElementById('builder'));