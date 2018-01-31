import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.deleteItem=this.deleteItem.bind(this);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  deleteItem (key) {
    const xyz=this.state.items.filter(function (c1) {
        return (c1.key !== key);
      });
    this.setState({items:xyz});
  }

  onSubmit = (event) => {
    event.preventDefault();
    //this.setState({
      //term: '',
      //items: [...this.state.items, this.state.term]
      var xyz = this.state.items;
      xyz.push({task:this.state.term,key:Date.now()});
    //});
    this.setState({items:xyz});
    console.log(xyz);
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
