'use strict';

var settings = {};
var css = require('./css/main.css');
var React = require('react');
var Wall = require('./js/Wall');

var materials = {
    // cost per linear foot
    studs:{
        twoByFour: { name: '2x4', cost:0.375 },
        twoBySix: { name: '2x6', cost:0.5 }
    },

    insulation:{
        none: { name:'none', cost:0 }
    }
};

// render base component
React.render(<Wall 
    materials={materials} 
    studs="twoBySix" 
    insulation="none"
    width="20" 
    height="10" 
    onCenter="16" />, document.getElementById('main'));