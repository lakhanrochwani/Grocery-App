import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const Product = ({ name, votes, index, onVote }) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    onVote(1, index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
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
  // Finish writing the GroceryApp class
  state = { products: this.props.products };

  onVote = (dir, index) => {
    // Update the products array accordingly ...
    this.setState(
      this.state.products.map((product, i) => {
        if (i === index) {
          product.votes+=dir
        }
        return product;
      })
    );
  };

  render() {
    return (
      <ul>
        {
          /* Render an array of products, which should call this.onVote when + or - is clicked */
          this.state.products.map((product, index) => (
            <Product
              index={index}
              onVote={this.onVote}
              key={product.name}
              name={product.name}
              votes={product.votes}
            />
          ))
        }
      </ul>
    );
  }
}
