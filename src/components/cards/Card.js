import React, { Component } from 'react';
import './card.css';
class Card extends Component {
  render(props) {
    return (
      <div className='card'>
        <img
          src={`https://robohash.org/${this.props.person.id}?set=set5&size=180x180`}
          alt='person'
        />
        <h3>{this.props.person.name}</h3>
        <p>{this.props.person.email}</p>
      </div>
    );
  }
}

export default Card;
