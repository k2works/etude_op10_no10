import React, { Component } from 'react'

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
                    <input size="3" name="sum" value="300" readonly="" type="text"/>
                </td>
            </tr>
        )
    }
}

class ScoreForFrames extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs" value="30" readonly="" type="text"/>
                </td>
            </tr>
        )
    }
}

class SelectItems extends React.Component {
    render() {
        return (
            <select>
                <option value="10">X</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="0">G</option>
            </select>
        )
    }
}

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

export default BowlingScoreTable