import React from 'react'
import ReactDOM from 'react-dom'
import $      from 'jquery';
import BowlingScoreTable from './BowlingScoreTable'

class BowlingGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: data => {
                this.setState({scores: data})
            },
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        });
    }

    handleSubmit() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
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
                <input type="submit" value="計算する" method="POST" />
                <a href="/scores/create" onClick={this.handleSubmit}>計算する</a>
            </form>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <BowlingGameForm name="React" url="/scores/score"/>,
        document.body.appendChild(document.createElement('form')),
    )
});

