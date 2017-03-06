import React, { Component } from 'react'

class BowlingScoreTable extends React.Component {
    render() {
        return (
            <table>
                <tobody>
                    <Frames/>
                    <Throws/>
                    <ScoreForFrames/>
                </tobody>
            </table>
        )
    }
}

class Frames extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2">1</td>
                <td colSpan="2">2</td>
                <td colSpan="2">3</td>
                <td colSpan="2">4</td>
                <td colSpan="2">5</td>
                <td colSpan="2">6</td>
                <td colSpan="2">7</td>
                <td colSpan="2">8</td>
                <td colSpan="2">9</td>
                <td colSpan="2">10</td>
                <td colSpan="2">合計</td>
            </tr>
        )
    }
}

class Throws extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    render() {
        return (
            <tr>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <SelectItems/>
                </td>
                <td>
                    <input size="3" name="sum" value={this.state.value} readonly="" type="text"/>
                </td>
            </tr>
        )
    }
}

class ScoreForFrames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    render() {
        return (
            <tr>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value={this.state.value} readonly="" type="text"/>
                </td>
            </tr>
        )
    }
}

class SelectItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pins: [null,10,9,8,7,6,5,4,3,2,1,0]
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        let options = this.state.pins.map(function(pin) {
            if (pin === 10) {
                pin = 'X'
            } else if (pin === 0) {
                pin = 'G'
            }
            return <option value={pin} key={pin}>{pin}</option>
        });
        return (
            <select
                value={this.state.value}
                onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}

export default BowlingScoreTable