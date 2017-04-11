import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class BeerListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(name) {
        this.setState({
            beers: [].concat(this.state.beers).concat([name])
        });
    }

    render() {
        return (
            <div>
                <InputArea onSubmit={this.addItem}/>
                <BeerList/>
            </div>
            )
    }
}

export class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onSubmit(this.state.text);
    }

    setText(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.setText}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export class BeerList extends Component {
    render() {
        return <ul/>
    }
}

ReactDOM.render(
    <BeerListContainer/>,
    document.body.appendChild(document.createElement('div')),
);