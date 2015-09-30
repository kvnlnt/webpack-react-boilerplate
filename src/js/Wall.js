'use strict';
var React = require('react');

module.exports = React.createClass({
  render: function () {
    // studs
    var numOfWallStuds = ((this.props.width * 12) / this.props.onCenter);
    var costPerWallStud = this.props.materials.studs[this.props.studs].cost * this.props.height;
    var wallStudCost = numOfWallStuds * costPerWallStud;

    // plates
    // calced by 10' boards
    var numOfPlateStuds = (this.props.width * 12) / 120; // in inches
    var costPerPlateStud = this.props.materials.studs[this.props.studs].cost * 10;
    var plateStudCost = numOfPlateStuds * costPerPlateStud;

    // calc total
    var totalStudCost = wallStudCost + plateStudCost + plateStudCost;

    return (
        <div className="Wall">
            <h2>{this.props.width}' x {this.props.height}' Wall</h2>
            <table>

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
                    <td>{this.props.height}' {this.props.materials.studs[this.props.studs].name}</td>
                    <td>{numOfWallStuds}</td>
                    <td>${wallStudCost} (${costPerWallStud}/each)</td>
                </tr>
                <tr>
                    <td>Top Plate</td>
                    <td>10' {this.props.materials.studs[this.props.studs].name}</td>
                    <td>{numOfPlateStuds}</td>
                    <td>${plateStudCost} (${costPerPlateStud}/each)</td>
                </tr>
                <tr>
                    <td>Bottom Plate</td>
                    <td>10' {this.props.materials.studs[this.props.studs].name}</td>
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
