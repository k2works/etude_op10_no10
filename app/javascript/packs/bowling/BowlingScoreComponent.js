import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styles from './Bowling.css';

class BowlingScoreTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Frames/>
                <Throws scores={this.props.scores} ref="throws"/>
            </Grid>
        )
    }
}

class Frames extends React.Component {
    render() {
        return (
            <Row className={[styles.ScoreFormFrameHeaderLayout,styles.ScoreFormFrameHeader]}>
                <Col xs={1} ></Col>
                <Col xs={2} >FirstThrow</Col>
                <Col xs={2} >SecondThrow</Col>
                <Col xs={2} >ThirdThrow</Col>
                <Col xs={2} >ScoreForFrame</Col>
            </Row>
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
            <Row>
                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>1</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw01" pins={this.state.pins} ref="throw01"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw02" pins={this.state.nextPins} ref="throw02"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs01" value={this.props.scores.fs01} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>2</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw03" pins={this.state.pins} ref="throw03"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw04" pins={this.state.nextPins} ref="throw04"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs02" value={this.props.scores.fs02} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>3</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw05" pins={this.state.pins} ref="throw05"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw06" pins={this.state.nextPins} ref="throw06"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs03" value={this.props.scores.fs03} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>4</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw07" pins={this.state.pins} ref="throw07"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw08" pins={this.state.nextPins} ref="throw08"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs04" value={this.props.scores.fs04} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>5</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw09" pins={this.state.pins} ref="throw09"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw10" pins={this.state.nextPins} ref="throw10"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs05" value={this.props.scores.fs05} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>6</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw11" pins={this.state.pins} ref="throw11"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw12" pins={this.state.nextPins} ref="throw12"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs06" value={this.props.scores.fs06} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>7</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw13" pins={this.state.pins} ref="throw13"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw14" pins={this.state.nextPins} ref="throw14"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs07" value={this.props.scores.fs07} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>8</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw15" pins={this.state.pins} ref="throw15"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw16" pins={this.state.nextPins} ref="throw16"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs08" value={this.props.scores.fs08} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>9</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw17" pins={this.state.pins} ref="throw17"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw18" pins={this.state.nextPins} ref="throw18"/>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs09" value={this.props.scores.fs09} type="text"/>
                    </Col>
                </div>

                <div className="form-group">
                    <Col xs={1} className={styles.ScoreFormFrameLabelLayout}>
                        <label>10</label>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw19" pins={this.state.pins} ref="throw19"/>
                    </Col>
                    <Col xs={2} onBlur={this.handlePinsForNextThrow}>
                        <SelectItems currentThrow="throw20" pins={this.state.nextPins} ref="throw20"/>
                    </Col>
                    <Col xs={2}>
                        <SelectItems currentThrow="throw21" pins={this.state.nextPins} ref="throw21"/>
                    </Col>
                    <Col xs={2}>
                        <input className="form-control" size="3" name="fs10" value={this.props.scores.fs10} type="text"/>
                    </Col>
                </div>
            </Row>
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
                className="form-control"
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