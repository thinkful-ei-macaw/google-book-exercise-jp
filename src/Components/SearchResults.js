import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <ul>
        {' '}
        {this.props.results.map(result => {
          console.log(result.saleInfo);
          return (
            <li>
              <h1>{result.volumeInfo.title}</h1>
              <img
                src={result.volumeInfo.imageLinks.smallThumbnail}
                alt="book cover"
              />
              <p>Author: {result.volumeInfo.authors}</p>
              <p>
                Price:
                {result.saleInfo.saleability === 'FOR_SALE'
                  ? ' $' + result.saleInfo.listPrice.amount
                  : ' Not for sale'}
              </p>
              <p>{result.volumeInfo.description}</p>
            </li>
          );
        })}
        ;
      </ul>
    );
  }
}
export default SearchResults;
