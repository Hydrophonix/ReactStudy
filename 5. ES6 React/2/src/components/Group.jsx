import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Person from './Person.jsx';
import GROUP from '../assets/data/users.json';

class Group extends Component {
  state = {
      searchText: ''
  }

  handleSearch = e =>
      this.setState({
          searchText: e.target.value
      })

  render() {
      return (
          <div>
              <input placeholder="Enter name to search" onChange={this.handleSearch} value={this.state.searchText}/>
              {
                  GROUP.filter(item =>
                      item.firstName.toLowerCase().includes(this.state.searchText.toLowerCase())
                || item.lastName.toLowerCase().includes(this.state.searchText.toLowerCase()))
                      .map(person =>
                          <Person key={person.id} {...person} />
                      )
              }
          </div>
      );
  }
}

export default hot(module)(Group);
