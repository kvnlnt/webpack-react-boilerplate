'use strict';
var React = require('react');
var css = require('../settings.js').css;

var style = {
    color: css.color
};

module.exports = React.createClass({
  displayName: 'Main',
  render: function () {
    return <h1 style={style}>Hello World</h1>;
  }
});
