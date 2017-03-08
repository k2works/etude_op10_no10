import React from 'react'
import ReactDOM from 'react-dom'
import $      from 'jquery';
import BowlingScoreTable from './BowlingScoreTable'

class BowlingGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: '{"bowling_game_form":{"throw01":"10","throw02":"10","throw03":"","throw04":"","throw05":"","throw06":"","throw07":"","throw08":"","throw09":"","throw10":"","throw11":"","throw12":"","throw13":"","throw14":"","throw15":"","throw16":"","throw17":"","throw18":"","throw19":"","throw20":"","throw21":""}}'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let data = $.parseJSON(this.state.scores);
        this._callAjax(data);
    }

    handleSubmit() {
        let data = $.parseJSON(this.state.scores);
        this._callAjax(data);
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
                <BowlingScoreTable />
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

