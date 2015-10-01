'use strict';
var React = require('react');
var Materials = require('./materials');

var form = React.createClass({
    populateOptions(ary, src){
        var ary = [];
        for(var val in src) {
            ary.push(<option value={src[val].name}>{src[val].name}</option>);
        };
        return ary;
    },
    populateOptionsByRange(start, end){
        var ary = [];
        for (let i=start; i<end+1; i++){
            ary.push(<option value={i}>{i}</option>);
        }
        return ary;
    },
    addWall: function(event){
        event.preventDefault();
        var wall = {
            height: React.findDOMNode(this.refs.height).value,
            width: React.findDOMNode(this.refs.width).value,
            onCenter: React.findDOMNode(this.refs.onCenter).value,
            studs: React.findDOMNode(this.refs.studs).value,
            insulation: React.findDOMNode(this.refs.insulation).value,
            interiorPaneling: React.findDOMNode(this.refs.interiorPaneling).value,
            exteriorPaneling: React.findDOMNode(this.refs.exteriorPaneling).value,
            exteriorPaint: React.findDOMNode(this.refs.exteriorPaint).value,
            vaporBarrier: React.findDOMNode(this.refs.vaporBarrier).value,
            siding: React.findDOMNode(this.refs.siding).value
        };
        console.log(wall);
    },
    render: function () {
        
        // materials
        var height = this.populateOptionsByRange(2, 40);
        var width = this.populateOptionsByRange(5, 80);
        var studs = this.populateOptions(studs, Materials.studs);;
        var insulation = this.populateOptions(insulation, Materials.insulation);;
        var interiorPaneling = this.populateOptions(interiorPaneling, Materials.interiorPaneling);;
        var exteriorPaneling = this.populateOptions(exteriorPaneling, Materials.exteriorPaneling);;
        var interiorPaint = this.populateOptions(interiorPaint, Materials.interiorPaint);;
        var exteriorPaint = this.populateOptions(exteriorPaint, Materials.exteriorPaint);;
        var vaporBarrier = this.populateOptions(vaporBarrier, Materials.vaporBarrier);;
        var siding = this.populateOptions(siding, Materials.siding);

        return (
            <div className="Builder">
                <form className="pure-form pure-form-stacked">
                    <legend>Wall</legend>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Height (ft)</label>
                            <select ref="height" className="pure-u-23-24">{height}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Width (ft)</label>
                            <select ref="width" className="pure-u-23-24">{width}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>On Center (in)</label>
                            <select ref="onCenter" className="pure-u-23-24">
                                <option value="16">16</option>
                                <option value="24">24</option>
                            </select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Studs</label>
                            <select ref="studs" className="pure-u-23-24">{studs}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Insulation</label>
                            <select ref="insulation" className="pure-u-23-24">{insulation}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Interior Paneling</label>
                            <select ref="interiorPaneling" className="pure-u-23-24">{interiorPaneling}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Exterior Paneling</label>
                            <select ref="exteriorPaneling" className="pure-u-23-24">{exteriorPaneling}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Exterior Paint</label>
                            <select ref="exteriorPaint" className="pure-u-23-24">{exteriorPaint}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Vapor Barrier</label>
                            <select ref="vaporBarrier" className="pure-u-23-24">{vaporBarrier}</select>
                        </div>
                        <div className="pure-u-1 pure-u-sm-1-4">
                            <label>Siding</label>
                            <select ref="siding" className="pure-u-23-24">{siding}</select>
                        </div>
                    </div>
                    <button onClick={this.addWall} className="pure-button  pure-button-primary">Add</button>
                </form>
            </div>
        );
    }
});

var wall = React.createClass({
  render: function () {
    // studs
    var numOfWallStuds = ((this.props.width * 12) / this.props.onCenter);
    var costPerWallStud = Materials.studs[this.props.studs].cost * this.props.height;
    var wallStudCost = numOfWallStuds * costPerWallStud;

    // plates
    // calced by 10' boards
    var numOfPlateStuds = (this.props.width * 12) / 120; // in inches
    var costPerPlateStud = Materials.studs[this.props.studs].cost * 10;
    var plateStudCost = numOfPlateStuds * costPerPlateStud;

    // calc total
    var totalStudCost = wallStudCost + plateStudCost + plateStudCost;

    return (
        <div className="Wall">
            <h2>{this.props.width}' x {this.props.height}' Wall</h2>
            <table className="pure-table  pure-table-bordered">

                <thead>
                <tr>
                    <th>Unit</th>
                    <th>Material</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Studs</td>
                    <td>{this.props.height}' {Materials.studs[this.props.studs].name}</td>
                    <td>{numOfWallStuds}</td>
                    <td>${wallStudCost} (${costPerWallStud}/each)</td>
                </tr>
                <tr>
                    <td>Top Plate</td>
                    <td>10' {Materials.studs[this.props.studs].name}</td>
                    <td>{numOfPlateStuds}</td>
                    <td>${plateStudCost} (${costPerPlateStud}/each)</td>
                </tr>
                <tr>
                    <td>Bottom Plate</td>
                    <td>10' {Materials.studs[this.props.studs].name}</td>
                    <td>{numOfPlateStuds}</td>
                    <td>${plateStudCost} (${costPerPlateStud}/each)</td>
                </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Insulation</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Interior / Paneling</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Interior / Plaster</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Interior / Paint</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Exterior / Paneling</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Exterior / Moisture Barrier</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Exterior / Siding</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                 <tbody>
                    <tr>
                        <td>Exterior / Paint</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

              </table>
        </div>
    );
  }
});

module.exports = {
    form:form
};