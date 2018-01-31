import React from 'react';

class List extends React.Component{
	constructor(props) {
		super(props);
		this.createTask=this.createTask.bind(this);
	}
	delete (key) {
		this.props.delete(key);
	}

	createTask(b1) {
		return <li> {b1.task} <button onClick={() => this.delete(b1.key)}>X</button> </li>
	}

	render () {
		return (
  			<ul> 
  				{this.props.items.map(this.createTask)}
  			</ul>
  		);
  	}
}

export default List;