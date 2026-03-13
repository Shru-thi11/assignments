import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    list: [],
    task: '',
    description: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { task, description, list } = this.state;

    const newItem = {
      title: task,
      author: description,
      objectID: Date.now(),
    };

    this.setState({
      list: [...list, newItem],
      task: '',
      description: '',
    });
  }

  onDismiss = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.objectID !== id)
    });
  }

  render() {
    const { task, description, list } = this.state;
    return (
      <div className="page">
        <h3>New task:</h3>

        <form onSubmit={this.onSubmit}>
          <input name="task" placeholder="My task?" value={task} onChange={this.handleChange} required />
          <input name="description" placeholder="Describe it" value={description} onChange={this.handleChange} required />
          <button type="submit">Add</button>
        </form>
        <h3>My todo list:</h3>
        <ul>
          {list.map(item => (
            <li key={item.objectID}>
              <span><b>{item.title}</b>: {item.author}</span>
              <button onClick={() => this.onDismiss(item.objectID)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;