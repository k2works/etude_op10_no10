import React from 'react'
import ReactDOM from 'react-dom'
import $      from 'jquery';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import BowlingScoreComponent from './BowlingScoreComponent'
import styles from './Bowling.css';

class BowlingGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: '{"bowling_game_form":{"throw01":"","throw02":"","throw03":"","throw04":"","throw05":"","throw06":"","throw07":"","throw08":"","throw09":"","throw10":"","throw11":"","throw12":"","throw13":"","throw14":"","throw15":"","throw16":"","throw17":"","throw18":"","throw19":"","throw20":"","throw21":""}}'
        };
        this.baseState = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let scores = this._getScores();
        let data = $.parseJSON(scores);
        this._callAjax(data);
    }

    handleReset(e) {
        e.preventDefault();
        let data = $.parseJSON(this.baseState.scores);
        this._getSelectThrowRefs().throw01.setState({value: ''});
        this._getSelectThrowRefs().throw02.setState({value: ''});
        this._getSelectThrowRefs().throw03.setState({value: ''});
        this._getSelectThrowRefs().throw04.setState({value: ''});
        this._getSelectThrowRefs().throw05.setState({value: ''});
        this._getSelectThrowRefs().throw06.setState({value: ''});
        this._getSelectThrowRefs().throw07.setState({value: ''});
        this._getSelectThrowRefs().throw08.setState({value: ''});
        this._getSelectThrowRefs().throw09.setState({value: ''});
        this._getSelectThrowRefs().throw10.setState({value: ''});
        this._getSelectThrowRefs().throw11.setState({value: ''});
        this._getSelectThrowRefs().throw12.setState({value: ''});
        this._getSelectThrowRefs().throw13.setState({value: ''});
        this._getSelectThrowRefs().throw14.setState({value: ''});
        this._getSelectThrowRefs().throw15.setState({value: ''});
        this._getSelectThrowRefs().throw16.setState({value: ''});
        this._getSelectThrowRefs().throw17.setState({value: ''});
        this._getSelectThrowRefs().throw18.setState({value: ''});
        this._getSelectThrowRefs().throw19.setState({value: ''});
        this._getSelectThrowRefs().throw20.setState({value: ''});
        this._getSelectThrowRefs().throw21.setState({value: ''});
        this._callAjax(data);
    }

    _getSelectThrowRefs() {
        return this.refs.bowlingScoreComponent.refs.throws.refs;
    }

    _getScores() {
        let throw01 = this._decodeThrow(this._getThrows().throw01.state.value);
        let throw02 = this._decodeThrow(this._getThrows().throw02.state.value);
        let throw03 = this._decodeThrow(this._getThrows().throw03.state.value);
        let throw04 = this._decodeThrow(this._getThrows().throw04.state.value);
        let throw05 = this._decodeThrow(this._getThrows().throw05.state.value);
        let throw06 = this._decodeThrow(this._getThrows().throw06.state.value);
        let throw07 = this._decodeThrow(this._getThrows().throw07.state.value);
        let throw08 = this._decodeThrow(this._getThrows().throw08.state.value);
        let throw09 = this._decodeThrow(this._getThrows().throw09.state.value);
        let throw10 = this._decodeThrow(this._getThrows().throw10.state.value);
        let throw11 = this._decodeThrow(this._getThrows().throw11.state.value);
        let throw12 = this._decodeThrow(this._getThrows().throw12.state.value);
        let throw13 = this._decodeThrow(this._getThrows().throw13.state.value);
        let throw14 = this._decodeThrow(this._getThrows().throw14.state.value);
        let throw15 = this._decodeThrow(this._getThrows().throw15.state.value);
        let throw16 = this._decodeThrow(this._getThrows().throw16.state.value);
        let throw17 = this._decodeThrow(this._getThrows().throw17.state.value);
        let throw18 = this._decodeThrow(this._getThrows().throw18.state.value);
        let throw19 = this._decodeThrow(this._getThrows().throw19.state.value);
        let throw20 = this._decodeThrow(this._getThrows().throw20.state.value);
        let throw21 = this._decodeThrow(this._getThrows().throw21.state.value);

        let scoresHeader = '{"bowling_game_form":';
        let scoresBody = String();
        scoresBody += '{';
        scoresBody += '"throw01":"' + throw01 + '",';
        scoresBody += '"throw02":"' + throw02 + '",';
        scoresBody += '"throw03":"' + throw03 + '",';
        scoresBody += '"throw04":"' + throw04 + '",';
        scoresBody += '"throw05":"' + throw05 + '",';
        scoresBody += '"throw06":"' + throw06 + '",';
        scoresBody += '"throw07":"' + throw07 + '",';
        scoresBody += '"throw08":"' + throw08 + '",';
        scoresBody += '"throw09":"' + throw09 + '",';
        scoresBody += '"throw10":"' + throw10 + '",';
        scoresBody += '"throw11":"' + throw11 + '",';
        scoresBody += '"throw12":"' + throw12 + '",';
        scoresBody += '"throw13":"' + throw13 + '",';
        scoresBody += '"throw14":"' + throw14 + '",';
        scoresBody += '"throw15":"' + throw15 + '",';
        scoresBody += '"throw16":"' + throw16 + '",';
        scoresBody += '"throw17":"' + throw17 + '",';
        scoresBody += '"throw18":"' + throw18 + '",';
        scoresBody += '"throw19":"' + throw19 + '",';
        scoresBody += '"throw20":"' + throw20 + '",';
        scoresBody += '"throw21":"' + throw21 + '"';
        scoresBody += '}';
        let scoresFooter = '}';
        let scores = scoresHeader + scoresBody + scoresFooter;
        return scores;
    }

    _getThrows() {
        return this.refs.bowlingScoreComponent.refs.throws.refs;
    }

    _decodeThrow(itsThrow) {
        if (itsThrow === "X") {
            return '10'
        } else if (itsThrow === "G") {
            return '0'
        } else {
            return itsThrow
        }
    }

    _callAjax(data) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: data,
            success: data => {
                this.setState({scores: data})
            },
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        });
    }

    render() {
        let formCss = "form-horizontal" + ' ' + styles.Form + ' ' + styles.ScoreFormLayout;
        return (
            <form className={formCss} onSubmit={this.handleSubmit}>
                <BowlingScoreComponent
                    scores={this.state.scores}
                    ref="bowlingScoreComponent" />
                <Grid className="col-xs-offset-1 text-center">
                    <div className="form-group">
                        <Col xs={2}>
                            <Button onClick={this.handleSubmit} className={styles.Button}>Calculate</Button>
                        </Col>
                        <Col xs={2}>
                            <Button onClick={this.handleReset} className={styles.ResetButton}>Reset</Button>
                        </Col>
                    </div>
                </Grid>
            </form>
        )
    }
}

ReactDOM.render(
    <BowlingGameForm name="React" url="/scores/calculate"/>,
    document.body.appendChild(document.createElement('scoreForm')),
);
