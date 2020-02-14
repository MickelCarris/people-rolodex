import React, { Component } from 'react';
import './cardlist.css';
import Card from '../cards/Card';

class CardList extends Component {
  render(props) {
    return (
      <div className='cardlist'>
        {this.props.people.map(person => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    );
  }
}

export default CardList;
