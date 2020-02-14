import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: ''
    };
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ people: users }));
  }
  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>People Rolodex</h1>
        <SearchBox
          placeholder='search people'
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople} />
        {filteredPeople.length < 1 && (
          <p style={{ fontSize: 23, color: '#fff' }}>
            Oops :( No Results Found!
          </p>
        )}
      </div>
    );
  }
}

export default App;
