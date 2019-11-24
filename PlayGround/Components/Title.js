import React, {Component} from 'react';

//const title = 'Task List!';


class Title extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

export default Title;