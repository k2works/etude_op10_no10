import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BowlingGameTable} from './bowling_game_table'

export class BowlingGameScoreContainer extends Component {
    render() {
        return (
            <div>
                <BowlingGameTable/>
            </div>
        )
    }
}

ReactDOM.render(
    <BowlingGameScoreContainer/>,
    document.body.appendChild(document.createElement('div')),
);
