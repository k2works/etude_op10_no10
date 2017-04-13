import React, {Component} from 'react'

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

export default InputArea