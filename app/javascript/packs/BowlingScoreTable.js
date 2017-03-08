import React, { Component } from 'react'

class BowlingScoreTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tobody>
                    <Frames/>
                    <Throws scores={this.props.scores} ref="throws"/>
                    <ScoreForFrames  scores={this.props.scores}/>
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
                <td colSpan="2">Score</td>
            </tr>
        )
    }
}

class Throws extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            pins: [null,10,9,8,7,6,5,4,3,2,1,0],
            nextPins: [],
            lastPins: [],
            firstThrow10Th: 0,
            secondThrow10Th: 0
        };
        this.handlePinsForNextThrow= this.handlePinsForNextThrow.bind(this)
    }

    handlePinsForNextThrow(event) {
        if (event.target.name === 'throw19') {
            let theThrow = event.target.value;
            this.setState({firstThrow10Th:theThrow});
            this.setState({nextPins: Throws.getPinsFor10ThFrame(theThrow)});
        } else if (event.target.name === 'throw20') {
            let theThrow = event.target.value;
            if (this.isSpareIn10thFrame(theThrow)) {
                this.setState({lastPins: [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]});
            } else if (this.isGarterIn10thFrame(theThrow)) {
                this.setState({lastPins: [null]});
            } else {
                let lastThrow = event.target.value;
                let theThrow = this.calculateLastTwoThreeThrow(lastThrow);
                this.setState({lastPins: Throws.getPinsFor10ThFrame(theThrow)});
            }
        } else {
            let firstThrow = event.target.value;
            this.setPinsFor1thTo9thFrame(firstThrow);
        }
    }

    calculateLastTwoThreeThrow(lastThrow) {
        return parseInt(this.parseThrow(this.state.firstThrow10Th)) + parseInt(this.parseThrow(lastThrow));
    }

    isGarterIn10thFrame(lastThrow) {
        let theThrow = this.calculateLastTwoThreeThrow(lastThrow);
        if (theThrow === 0) {
            return true
        } else {
            return false
        }
    }

    isSpareIn10thFrame(lastThrow) {
        let theThrow = this.calculateLastTwoThreeThrow(lastThrow);
        if (theThrow > 9) {
            return true
        } else {
            return false
        }
    }

    parseThrow(theThrow) {
        if (theThrow === 'X') {
            return 10
        } else if (theThrow === 'G') {
            return 0
        } else {
            return theThrow;
        }
    }

    static getPinsFor10ThFrame(theThrow) {
        switch (theThrow.toString()) {
            case 'X':
                return [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            case '9':
                return [null, 1, 0];
            case '8':
                return [null, 2, 1, 0];
            case '7':
                return [null, 3, 2, 1, 0];
            case '6':
                return [null, 4, 3, 2, 1, 0];
            case '5':
                return [null, 5, 4, 3, 2, 1, 0];
            case '4':
                return [null, 6, 5, 4, 3, 2, 1, 0];
            case '3':
                return [null, 7, 6, 5, 4, 3, 2, 1, 0];
            case '2':
                return [null, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            case '1':
                return [null, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            case 'G':
                return [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        }
    }

    setPinsFor1thTo9thFrame(firstThrow) {
        switch (firstThrow.toString()) {
            case 'X':
                this.setState({nextPins: [null]});
                break;
            case '9':
                this.setState({nextPins: [null, 1, 0]});
                break;
            case '8':
                this.setState({nextPins: [null, 2, 1, 0]});
                break;
            case '7':
                this.setState({nextPins: [null, 3, 2, 1, 0]});
                break;
            case '6':
                this.setState({nextPins: [null, 4, 3, 2, 1, 0]});
                break;
            case '5':
                this.setState({nextPins: [null, 5, 4, 3, 2, 1, 0]});
                break;
            case '4':
                this.setState({nextPins: [null, 6, 5, 4, 3, 2, 1, 0]});
                break;
            case '3':
                this.setState({nextPins: [null, 7, 6, 5, 4, 3, 2, 1, 0]});
                break;
            case '2':
                this.setState({nextPins: [null, 8, 7, 6, 5, 4, 3, 2, 1, 0]});
                break;
            case '1':
                this.setState({nextPins: [null, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]});
                break;
            case 'G':
                this.setState({nextPins: [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]});
        }
    }

    render() {
        return (
            <tr>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw01" pins={this.state.pins} ref="throw01"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw02" pins={this.state.nextPins} ref="throw02"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw03" pins={this.state.pins} ref="throw03"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw04" pins={this.state.nextPins} ref="throw04"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw05" pins={this.state.pins} ref="throw05"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw06" pins={this.state.nextPins} ref="throw06"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw07" pins={this.state.pins} ref="throw07"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw08" pins={this.state.nextPins} ref="throw08"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw09" pins={this.state.pins} ref="throw09"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw10" pins={this.state.nextPins} ref="throw10"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw11" pins={this.state.pins} ref="throw11"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw12" pins={this.state.nextPins} ref="throw12"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw13" pins={this.state.pins} ref="throw13"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw14" pins={this.state.nextPins} ref="throw14"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw15" pins={this.state.pins} ref="throw15"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw16" pins={this.state.nextPins} ref="throw16"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw17" pins={this.state.pins} ref="throw17"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw18" pins={this.state.nextPins} ref="throw18"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw19" pins={this.state.pins} ref="throw19"/>
                </td>
                <td onBlur={this.handlePinsForNextThrow}>
                    <SelectItems currentThrow="throw20" pins={this.state.nextPins} ref="throw20"/>
                </td>
                <td>
                    <SelectItems currentThrow="throw21" pins={this.state.lastPins} ref="throw21"/>
                </td>
                <td>
                    <input size="3" name="score" value={this.props.scores.score} readonly="" type="text"/>
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
                    <input size="3" name="fs1" value={this.props.scores.fs1} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs2" value={this.props.scores.fs2} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs3" value={this.props.scores.fs3} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs4" value={this.props.scores.fs4} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs5" value={this.props.scores.fs5} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs6" value={this.props.scores.fs6} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs7" value={this.props.scores.fs7} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs8" value={this.props.scores.fs8} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs9" value={this.props.scores.fs9} type="text"/>
                </td>
                <td colSpan="2">
                    <input size="3" name="fs10" value={this.props.scores.fs10} type="text"/>
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
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOnClick(event) {
        this.setState({pins: this.props.pins})
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
                name={this.props.currentThrow}
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleOnClick}>
                {options}
            </select>
        )
    }
}

export default BowlingScoreTable