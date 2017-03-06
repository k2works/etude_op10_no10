import React from 'react'
import ReactDOM from 'react-dom'
import BowlingScoreTable from './BowlingScoreTable'

class BowlingGameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name}
    }

    updateName(name) {
        this.setState({name});
    }

    render() {
        return (
            <BowlingScoreTable/>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <BowlingGameForm name="React"/>,
        document.body.appendChild(document.createElement('table')),
    )
})

