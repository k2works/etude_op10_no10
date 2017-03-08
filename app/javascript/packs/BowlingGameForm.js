import React from 'react'
import ReactDOM from 'react-dom'
import $      from 'jquery';
import BowlingScoreTable from './BowlingScoreTable'

class BowlingGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: '{"bowling_game_form":{"throw01":"","throw02":"","throw03":"","throw04":"","throw05":"","throw06":"","throw07":"","throw08":"","throw09":"","throw10":"","throw11":"","throw12":"","throw13":"","throw14":"","throw15":"","throw16":"","throw17":"","throw18":"","throw19":"","throw20":"","throw21":""}}'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let scores = this._getScores();
        let data = $.parseJSON(scores);
        this._callAjax(data);
    }

    _getScores() {
        let throw01 = this._getThrows().throw01.state.value;
        let throw02 = this._getThrows().throw02.state.value;
        let throw03 = this._getThrows().throw03.state.value;
        let throw04 = this._getThrows().throw04.state.value;
        let throw05 = this._getThrows().throw05.state.value;
        let throw06 = this._getThrows().throw06.state.value;
        let throw07 = this._getThrows().throw07.state.value;
        let throw08 = this._getThrows().throw08.state.value;
        let throw09 = this._getThrows().throw09.state.value;
        let throw10 = this._getThrows().throw10.state.value;
        let throw11 = this._getThrows().throw11.state.value;
        let throw12 = this._getThrows().throw12.state.value;
        let throw13 = this._getThrows().throw13.state.value;
        let throw14 = this._getThrows().throw14.state.value;
        let throw15 = this._getThrows().throw15.state.value;
        let throw16 = this._getThrows().throw16.state.value;
        let throw17 = this._getThrows().throw17.state.value;
        let throw18 = this._getThrows().throw18.state.value;
        let throw19 = this._getThrows().throw19.state.value;
        let throw20 = this._getThrows().throw20.state.value;
        let throw21 = this._getThrows().throw21.state.value;

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
        return this.refs.bowlingScoreTable.refs.throws.refs;
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
        return (
            <form onSubmit={this.handleSubmit}>
                <BowlingScoreTable scores={this.state.scores} ref="bowlingScoreTable" />
                <input type="submit" value="計算する"/>
            </form>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <BowlingGameForm name="React" url="/scores/calculate"/>,
        document.body.appendChild(document.createElement('form')),
    )
});

