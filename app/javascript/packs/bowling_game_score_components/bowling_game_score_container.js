import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class BowlingGameScoreContainer extends Component {
    render() {
        return (
            <div>
                <BowlingGameTable/>
            </div>
        )
    }
}

export class BowlingGameTable extends Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td></td>
                </tr>
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(
    <BowlingGameScoreContainer/>,
    document.body.appendChild(document.createElement('div')),
);
