import React from 'react';
import { hot } from 'react-hot-loader'
import Person from './Person.jsx';
import createReactClass from 'create-react-class';
import GROUP from '../assets/data/users.json';

const Group = createReactClass({
    getInitialState() {
      return {
        searchText: ''
      }
    },

    handleSearch(e) {
      this.setState({
        searchText: e.target.value
      })
    },

    render() {
        return (
            <div>
              <input placeholder="Enter name to search" onChange={this.handleSearch} value={this.state.searchText}/>
              {
                GROUP.filter(item =>
                  item.firstName.toLowerCase().includes(this.state.searchText.toLowerCase())
                  || item.lastName.toLowerCase().includes(this.state.searchText.toLowerCase()))
                  .map(person =>
                    <Person
                      key={person.id}
                      firstName={person.firstName}
                      lastName={person.lastName}
                      city={person.city}
                      specialisation={person.specialisation}
                    />
                  )
                }
            </div>
        )
    }
});

export default hot(module)(Group);
