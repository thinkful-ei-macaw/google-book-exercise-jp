import React, { Component } from 'react';
import Result from './Result';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <ul className="results-list">
        {this.props.results.map(result => {
          console.log(result.saleInfo);
          return (
            <Result
              key={result.id}
              title={result.volumeInfo.title}
              imageUrl={result.volumeInfo.imageLinks.smallThumbnail}
              author={result.volumeInfo.authors}
              saleInfo={result.saleInfo}
              desc={result.volumeInfo.description}
            />
          );
        })}
      </ul>
    );
  }
}
export default SearchResults;
