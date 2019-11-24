import React, {Component} from 'react';
import List from '../../PlayGround/Components/List';
import Title from './Title';

class Main extends Component{
    render() {
        return ((<div>
            <Title title = "To Do List."/>
            <p>cose da fare</p>
            <List tasks = {['Task A', 'Task B']} />
            <p>cose da non fare</p>
            <List tasks = {['Task C', 'Task D']}/>
        </div>))
    }
}

export default Main;