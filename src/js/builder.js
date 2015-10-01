'use strict';
var React = require('react');
var Materials = require('./materials.js');
var WallForm = require('./wall').form;

var form = React.createClass({
    addWall: function(){
        console.log(WallForm);
    },
    render: function () {
        return (
            <div class="pure-menu custom-restricted-width">
            <span class="pure-menu-heading">Builder</span>
            <ul className="Builder" className="pure-menu-list">
                <li className="pure-menu-item"><a onClick={this.addWall} href="#" className="pure-menu-link">Add Wall</a></li>
            </ul>
            </div>
        );
    }
});

module.exports = {
    form: form
}
