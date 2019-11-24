import React, {Component} from 'react';

//const tasks = ['Take out the trash', 'Showel the driveway', 'Walk the dog'];

/*const element =
    <div>
        <h1>{title}</h1>
        <ol>
            {tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>
    </div>
*/

/*const element =
    React.createElement('ol',null, tasks.map((task, index) => React.createElement('li', {key: index}, task))
        //React.createElement('li', null, 'Take out the trash'),
        //React.createElement('li', null, 'Showel the driveway'),
        //React.createElement('li', null, 'Walk the dog')
    );
*/

// ReactDom.render(element, document.getElementById('root'));

class List extends Component {
    render() {
        return (<ol>
            {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>)

    }
}

export default List;