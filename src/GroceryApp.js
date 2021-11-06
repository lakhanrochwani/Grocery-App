import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const Product = ({ name, votes, index, onVote }) => {
  const plus = () => {
    onVote(1, index);
  };
  const minus = () => {
    onVote(-1, index);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>&nbsp;
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

export default class GroceryApp extends React.Component {
  state = { products: this.props.products };

  onVote = (dir, index) => {
    this.setState(
      this.state.products.map((product, i) => {
        if (i === index) {
          product.votes += dir;
        }
        return product;
      })
    );
  };

  render() {
    return (
      <ul>
        {this.state.products.map((product, index) => (
          <Product
            index={index}
            onVote={this.onVote}
            key={product.name}
            name={product.name}
            votes={product.votes}
          />
        ))}
      </ul>
    );
  }
}
